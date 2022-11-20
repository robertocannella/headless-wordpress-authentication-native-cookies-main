import {useQuery, gql } from "@apollo/client";
import {type} from "os";

const GET_PRODUCTS = gql`
    query NewQuery {
      products(first: 2) {
        nodes {
          id
          name
          date
          image {
            sourceUrl
          }
    
        }
      }
    }
`;

export default function ShowProducts() {
    const { loading, error, data } = useQuery(GET_PRODUCTS);
    const wasPostCreated = Boolean(data?.createPost?.post?.databaseId);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;

    return data.products.nodes.map(({ id, name, date, image }:any) => (
        <div key={id}>
            <h3>{name}</h3>
            <img width="400" height="250" alt="location-reference" src={`${image.sourceUrl}`} />
            <br />
            <b>About this location:</b>
            <p>{date}</p>
            <br />
        </div>
    ));



}
