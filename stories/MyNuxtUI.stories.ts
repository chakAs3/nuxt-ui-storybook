import type { Meta, StoryObj } from '@storybook/vue3'

import MyComponent from '~/components/ui-table.vue'

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction

const meta = {
  title: 'Example/NuxtUIWelcome',
  component: MyComponent,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ['autodocs'],

} satisfies Meta<typeof MyComponent>

export default meta
type Story = StoryObj<typeof meta>

export const MyUI: Story = {
  args: {},
}
