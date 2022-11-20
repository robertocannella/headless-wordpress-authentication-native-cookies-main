import Layout from "../components/Layout";
import AuthContent from "../components/AuthContent";
import StoreFront from "../components/StoreFront";

export default function MembersContent() {
    return (
        <Layout>
            <h1>Members</h1>
            <AuthContent>
                <StoreFront />
            </AuthContent>
        </Layout>
    );
}
