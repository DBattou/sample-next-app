const fs = require("fs");
const getRandom = () => `
Dolor quis incidunt quaerat. Excepturi cupiditate blanditiis mollitia repellat odit. Aut vero ea molestiae delectus ut omnis labore. Rerum maiores ullam qui nihil qui quia aut. Mollitia perferendis unde iure molestiae et ducimus. Dolores suscipit numquam est et quia quam eaque quas.
Quaerat voluptas labore et nobis omnis recusandae non. Corporis quis sunt magni. Omnis quam vero in voluptatibus omnis dolor distinctio quidem.
Ipsam deleniti quaerat repellat. Sed voluptatibus tempora id odio. Aliquam qui unde eum nesciunt totam occaecati eaque enim. Nesciunt dicta et dolor ab iusto. Laudantium nemo sint et. Aut quos maiores amet blanditiis quia inventore sed incidunt.
Itaque repudiandae nihil veritatis error. Libero voluptatum omnis quia aut repellat repellendus ut commodi. Similique deserunt quis sapiente eos error eveniet enim quibusdam. Inventore deserunt quibusdam ipsam quaerat. Placeat architecto quaerat distinctio nisi quas nostrum odio quo. Similique commodi quia facilis ullam neque.
Sint vitae accusantium exercitationem optio est. Eveniet recusandae eos eos voluptatem. Porro soluta rerum nesciunt necessitatibus provident. Sint assumenda ratione assumenda assumenda non.
`;

const writeComponents = (n) => {
  Array.from({ length: n }).forEach((_, i) => {
    const content = `
import React from "react";
export const Lorem${i} = () => (
  <div>
    ${getRandom()}
  </div>
);
  `;
    fs.writeFileSync(`./packages/ui/src/noise/lorem-${i}.tsx`, content);
  });

  fs.writeFileSync(
    `./packages/ui/src/noise/index.tsx`,
    `// Generated index
${Array.from({ length: n }).map(
    (_, i) => `export { Lorem${i} } from "./lorem-${i}";`
  ).join('\n')}
  `
  );

  fs.writeFileSync(
    `./packages/routes/src/noise/index.tsx`,
    `// Generated index
${Array.from({ length: n })
  .map((_, i) => `export { Lorem${i} } from "./lorem-${i}";`)
  .join("\n")}
  `
  );
};

writeComponents(5);
