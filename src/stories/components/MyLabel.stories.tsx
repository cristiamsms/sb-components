import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MyLabel } from "../../components/MyLabel";


export default {
    title:'Example/MyLabel',
    component:MyLabel,
    argTypes: {
        color: { control: 'color' },
      },
} as ComponentMeta<typeof MyLabel>

const Template:ComponentStory<typeof MyLabel> = (args)=><MyLabel {...args}/>


export const Basic= Template.bind({});
Basic.args ={
    label:'prueba',
    size:'normal'
}

export const AllCaps= Template.bind({});
AllCaps.args ={
    label:'prueba',
    size:'normal',
    allCaps:true
}

export const Secondary= Template.bind({});
Secondary.args ={
    label:'prueba',
    size:'normal',
    colorClass:'secondary'
}

export const Tertiary = Template.bind({});
Tertiary.args ={
    label:'prueba',
    size:'normal',
    colorClass:'tertiary'
}
export const Customcolor = Template.bind({});
Customcolor.args ={
    label:'prueba',
    size:'h1',
    color:''
}