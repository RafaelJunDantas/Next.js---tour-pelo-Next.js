import { Box, Text, Button } from '@skynexui/components';
import { useRouter } from 'next/router';
import nookies from 'nookies';

export async function serverSideProps(context) {

  const cookies = nookies.get(context);
  console.log('Cookies: ', cookies)
  const senha = '123';
  const userSenha = cookies.senha; 
  const isAutorizado = senha === userSenha;

  if(!isAutorizado){
    console.log("Não Autorizado");
    return {
      redirect: {
        permanent: false,
        destination: '/?status=401',
      }
    }; 
  }
  
  console.log("Autorizado")

  return {
    props: {}
  }
}

export default function LoggedScreen(props) {
  const router = useRouter();
  return (
    <Box
      styleSheet={{
        border: '1px solid #F9703E',
        flexDirection: 'column',
        maxWidth: '400px',
        marginTop: '20%',
        marginHorizontal: 'auto',
        padding: '32px',
        borderRadius: '4px',
        boxShadow: '1px 1px 5px 0 rgba(255,69,0,0.2)',
      }}
    >
      <Text styleSheet={{ marginVertical: '32px' }}>
        Você acessou uma área protegida!
      </Text>

      <Button
        label='Logout'
        onClick={() => {
          nookies.destroy(null, 'senha');
          router.push('/')
        }}
        colorVariant='neutral'
        variant='secondary'
      />
    </Box>
  );
}
