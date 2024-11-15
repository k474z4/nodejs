// console.log(process.env);

const { SHELL, npm_config_local_prefix, npm_lifecycle_script } = process.env;

// console.table({ SHELL, npm_config_local_prefix, npm_lifecycle_script });

export const characters = ['Flash', 'Superman', 'Batman'];

const [, , batman] = characters;

// console.log(batman);

