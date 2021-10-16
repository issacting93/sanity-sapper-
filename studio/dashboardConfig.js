export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '616ac1a27f9d4f24b8def433',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-studio-ch59bs27',
                  apiId: '5c07acca-bc67-4b93-933f-bf15c2ae7142'
                },
                {
                  buildHookId: '616ac1a215fc272418848761',
                  title: 'Blog Website',
                  name: 'sanity-sapper-web-18mg61pp',
                  apiId: 'fb2776b3-ae55-4f51-8186-ac38e86806f1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/issacting93/sanity-sapper-',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-web-18mg61pp.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
