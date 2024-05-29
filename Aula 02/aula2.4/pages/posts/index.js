// exemplo do lado do servidor
// a2.4/pages/posts/index.js

export const getServerSideProps =  async (context) => {
    const dadosDaAPI = await fetch('https://fakeapi-omariosouto.vercel.app/api/posts/')
        .then((res) => res.json());

    const posts = dadosDaAPI.posts;

    const post = posts.filter((post_) => post_.date === context.query.date);
    console.log(context.query);  

    return {
        props: {
            post,
        },
    };
};

export default function Posts(props) {
    return (
        <div>
        {props.post.length > 0 ? (
            props.post.map((post) => (
            <pre key={post.id}>{JSON.stringify(post, null, 2)}</pre>
            ))
        ) : (
            <p>Nenhum post encontrado</p>
        )}
        </div>
    );
}