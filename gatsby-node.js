const path = require('path');

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  return new Promise((resolve, reject) => {
    const workTemplate = path.resolve('src/pages/work.js');
    resolve(
      graphql(`
        {
          allContentfulWork {
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
          reject(result.errors);
        }
        result.data.allContentfulWork.edges.forEach(edge => {
          createPage({
            path: edge.node.slug,
            component: workTemplate,
            context: {
              slug: edge.node.slug,
            },
          });
        });
        return;
      })
    );
  });
};
