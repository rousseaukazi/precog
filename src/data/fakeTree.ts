export interface TreeNode {
  id: string;
  text: string;
  probability: number;
  children?: TreeNode[];
}

export const fakeTree: TreeNode = {
  id: 'root',
  text: 'GPT-5 launches next year',
  probability: 1,
  children: [
    {
      id: 'industry',
      text: 'Industry accelerates AI adoption',
      probability: 0.7,
      children: [
        {
          id: 'regulation',
          text: 'Governments impose new regulations',
          probability: 0.5,
          children: [
            {
              id: 'compliance',
              text: 'Companies invest heavily in compliance',
              probability: 0.6,
            },
            {
              id: 'loopholes',
              text: 'Companies seek loopholes',
              probability: 0.4,
            }
          ]
        },
        {
          id: 'noRegulation',
          text: 'Minimal regulation is enacted',
          probability: 0.5,
          children: [
            {
              id: 'boom',
              text: 'Rapid market expansion',
              probability: 0.8,
            },
            {
              id: 'backlash',
              text: 'Public backlash against AI',
              probability: 0.2,
            }
          ]
        }
      ]
    },
    {
      id: 'slowAdoption',
      text: 'Adoption remains slow',
      probability: 0.3,
      children: [
        {
          id: 'researchFocus',
          text: 'Research continues but commercialization lags',
          probability: 0.6,
        },
        {
          id: 'stagnation',
          text: 'Overall stagnation in AI progress',
          probability: 0.4,
        }
      ]
    }
  ]
};
