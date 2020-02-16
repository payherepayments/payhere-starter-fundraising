import S from "@sanity/desk-tool/structure-builder"

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Content')
        .child(
          S.document()
            .schemaType('siteContent')
            .documentId('siteContent')
        ),
      // Add a visual divider (optional)
      S.divider(),
      // List out the rest of the document types, but filter out the config type
      ...S.documentTypeListItems()
        .filter(listItem => !['siteContent'].includes(listItem.getId()))
    ])
