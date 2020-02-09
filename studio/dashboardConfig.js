export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5e40689dc41e910da6cc705b',
                  title: 'Sanity Studio',
                  name: 'corbus-studio',
                  apiId: '60deeba1-a373-429c-9c70-65a56275a2d2'
                },
                {
                  buildHookId: '5e40689d73c44dff0e688d8b',
                  title: 'Landing pages Website',
                  name: 'corbus',
                  apiId: 'e2f83415-7c84-4bd6-95c2-116cfa1d9f4d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dnavamosler/corbus',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://corbus.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
