const path = require("path")

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve(
      "src/components/pageComponents/BlogPostTemplate.js"
    )
    resolve(
      graphql(`
        {
          allContentfulBlogPost(
            limit: 100
            sort: { fields: eventDate, order: DESC }
          ) {
            edges {
              node {
                id
                slug
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          reject(result.errors)
        }
        const allBlogPosts = result.data.allContentfulBlogPost.edges
        allBlogPosts.forEach((edge, index) => {
          createPage({
            path: edge.node.slug,
            component: blogPostTemplate,
            context: {
              id: edge.node.id,
              previousId:
                index > 0 ? allBlogPosts[index - 1].node.id : undefined,
              nextId:
                index < allBlogPosts.length - 1
                  ? allBlogPosts[index + 1].node.id
                  : undefined,
            },
          })
        })
        return
      })
    )
  })
}
