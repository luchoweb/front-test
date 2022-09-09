import { Link } from "react-router-dom";

import Layout from "./Layout"

const NotFoundView = () => {
  return (
    <Layout>
      <div className="page">
        <div className="max-centered">
          <h1>Page not found</h1>
          <p>Sorry, the page you want to see does not exist or has been moved. Please use the search or go to the <Link to="/">home page</Link></p>
        </div>
      </div>
    </Layout>
  )
}

export default NotFoundView;
