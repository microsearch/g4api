# g4api-ts

This is a thin wrapper around the G4 API for TypeScript and JavaScript. It is
automatically generated using `swagger-typescript-api`. This gives us some
advantages over manually writing interface code.

- We don't have to write interface code ourselves. It's a lot of tedious and
  error-prone work.
- The inputs and outputs of APIs are type-checked against the actual API.
- `swagger-typescript-api`-generated type annotations give us pretty good code
  completion in vscode.

The g4api-ts version reflects the G4 Service version against which it was built.

## importing g4api-ts

I've set up g4api-ts so that you can import it directly from GitHub. At some
point, I may set up a local NPM repository using AWS CodeArtifact. For now, I
put it on GitHub so we don't have to deal with CodeCommit credentials. Also, I'm
not sure if NPM supports direct imports from anything other than GitHub.

Once, you've set up your node or browser project you can add g4api-ts to its dependencies using:

    `npm install --save https://github.com/microsearch/g4api/tarball/1.3.4`

to get a specific version of the API or

    `npm install --save https://github.com/microsearch/g4api`

if you want to live on the edge.

NB: If you want to update the version of g4api-ts you're using later, you need
to delete the `node_modules` directory before running `npm install`. NPM does
seem to track the version when using direct imports.

## sample code

```typescript
import * as g4 from "g4api";

const baseURL = "https://g4-dev.v1.mrcapi.net";

async function getCredentials(): Promise<g4.UserAuthenticationResponse> {
  const g4auth = new g4.Auth({ baseURL });
  // generated methods are async
  const response = await g4auth.authCreate({
    username: "bender",
    password: "meatbag",
  });
  return response.data;
}

// wrap calls in async lambda expression since await is not allowed at top level
(async () => {
  const credentials = await getCredentials();
  console.log(credentials.fullname);
  console.log(credentials.bearer);

  const g4tenants = new g4.Tenants({ baseURL });
  const tenants = await g4tenants.tenantsList({
    headers: { authorization: `bearer ${credentials.bearer}` },
  });
  console.log(tenants.data.tenants);
})();
```

## maintenance

Procedure to update g4api-ts when the G4 Service API has changed.

1. `git clone https://github.com/microsearch/g4api-ts.git` if necessary.
1. `cd g4api-ts`
1. Update `package.json` to reflect current G4 Service version on dev.
1. `git clean -fxd`
1. `npm run generate`
1. Commit changes. i.e. `git commit -am "blah blah blah"`
1. Create a tag which matches the new version in `package.json`. i.e. `git tag 1.3.4`
1. `git push`
1. `git push --tags`
