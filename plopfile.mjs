export default function (plop) {
  // ここではfeatureというジェネレーターを作成する
  plop.setGenerator('component', {
    description: '新しいコンポーネントを作成します',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'コンポーネント名を入力してください (例: Button)',
      },
    ],
    actions: [
      {
        type: 'add',
        path: './app/components/{{name}}/index.tsx',
        templateFile: 'plop-templates/component/index.tsx.hbs',
      },
      {
        type: 'add',
        path: './app/components/{{name}}/{{name}}.tsx',
        templateFile: 'plop-templates/component/Component.tsx.hbs',
      },
    ],
  });
}
