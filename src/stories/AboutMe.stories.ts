import AboutMe from '$lib/components/about_me/aboutMe.svelte';
import type { Meta, StoryObj } from '@storybook/svelte';
const meta = {
	component: AboutMe
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof AboutMe>;
export const Primary = {
	
	args: {}
} satisfies Story;

export const Test = {
	args: {
		ab: 'sdf'
	}
} satisfies Story;

export const Biliberda = {
	args: {
		ab: 'ывдлаоывдлаыовдал',
		me: 'длаоыдвлао',
		fp: 'ывдлаоыдвлаодывлаод',
		sp: 'дылвоадылвоадлываодывла'
	}
} satisfies Story;  

