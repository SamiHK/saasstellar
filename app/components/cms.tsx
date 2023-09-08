import Wordpress from '~/components/icons/wordpress'
import Framer from '~/components/icons/framer'
import Notion from '~/components/icons/notion'
import Drupal from '~/components/icons/drupal'
import Strapi from '~/components/icons/strapi'
import Typedream from '~/components/icons/typedream'
import Joomla from '~/components/icons/joomla'
import Sanity from '~/components/icons/sanity'
import Storyblok from '~/components/icons/storyblok'
import React from 'react'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '~/components/ui/tooltip'

const Cms = () => {
    const cms = [
        {
            component: <Drupal height={42} width={42} />,
            name: 'Drupal',
        },
        {
            component: <Framer height={42} width={42} />,
            name: 'Framer',
        },
        {
            component: <Joomla height={42} width={42} />,
            name: 'Joomla',
        },
        {
            component: <Notion height={42} width={42} />,
            name: 'Notion',
        },
        {
            component: <Sanity height={42} width={42} />,
            name: 'Sanity',
        },
        {
            component: <Storyblok height={42} width={42} />,
            name: 'Storyblok',
        },
        {
            component: <Strapi height={42} width={42} />,
            name: 'Strapi',
        },
        {
            component: <Typedream height={42} width={42} />,
            name: 'Typedream',
        },
        {
            component: <Wordpress height={42} width={42} />,
            name: 'Wordpress',
        },
    ]

    return (
        <div className='mx-5 mt-16'>
            <p className='mb-6 text-center text-sm font-medium text-muted-foreground'>
                WORKS WITH 10+ CONTENT MANAGEMENT SYSTEMS
            </p>
            <div className='mx-auto flex flex-wrap items-center justify-center gap-8 fill-foreground'>
                {cms.map((item) => (
                    <React.Fragment key={item.name}>
                        <TooltipProvider delayDuration={100}>
                            <Tooltip>
                                <TooltipTrigger>
                                    {item.component}
                                </TooltipTrigger>
                                <TooltipContent side='bottom'>
                                    <p>{item.name}</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </React.Fragment>
                ))}
            </div>
        </div>
    )
}

export default Cms
