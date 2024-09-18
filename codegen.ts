import { CodegenConfig } from "@graphql-codegen/cli"

const config: CodegenConfig = {
  schema: "http://127.0.0.1:3000/api/graphql",
  documents: ["./**/*.tsx"],
  ignoreNoDocuments: true,
  generates: {
    "./app/lib/gql/": {
      presetConfig: {
        gqlTagName: "gql",
      },
      preset: "client",
    },
  },
}

export default config
