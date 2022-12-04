import {IBookmark, IForm, IProject} from "../types/data.interface";
import {InputTypeEnum} from "../types/data.enum";

export const DUMMY_BOOKMARKS: IBookmark[] = [
    {
        id: '1',
        title: 'NodeJs UI components with TailwindCSS',
        date: 'November 12, 2022',
        link: 'https://github.com/Idered/tailwindcss-radix-ui',
        tags: [
            {text: 'nodejs', showHash: false, },
            {text: 'jsts', showHash: false, },
        ]
    },
];

export const DUMMY_PROJECTS: IProject[] = [
    {
        id: '1',
        date: '2 feb 2022',
        image: 'https://res.cloudinary.com/dmcsnsw1f/image/upload/v1668858193/projects/paymed-login_savnr7.svg',
        title: 'Paymed',
        description: {
            shortDescription: 'this is a short description',
            designs: [
                {link: '', platform: 'web'},
                {link: '', platform: 'mobile'}
            ]
        },
        link: '',
        industries: [
            {text: 'Medical', showHash: false,}
        ],
        stacks: [
            {text: 'Java', showHash: false,},
            {text: 'PostgreSQL', showHash: false,},
        ],
        action: {link: '', title: 'Preview a demo'},
        modules: [
            {text: 'Electronic medical records', showHash: false},
            {text: 'Pharmacy outlets', showHash: false},
            {text: 'Stock & inventory', showHash: false},
            {text: 'Doctor clerking', showHash: false},
            {text: 'Nursing care', showHash: false},
            {text: 'Billing & invoicing', showHash: false},
            {text: 'Payment manager', showHash: false},
        ]
    },
];

export const BLOG_FORM_FIELDS: IForm = {
    postUrl: '',
    inputs: [
        {
            name: 'title',
            type: InputTypeEnum.TEXT,
            label: 'Post Title',
            rule: {rule: "required", value: true},
            defaultValue: '',
            required: true,
        },

        {
            name: 'author',
            type: InputTypeEnum.TEXT,
            label: 'Post Author',
            rule: {rule: "required", value: true},
            defaultValue: 'James',
            required: true,
        },

        {
            name: 'date',
            type: InputTypeEnum.DATE,
            label: 'Publish Date',
            defaultValue: ``,
            required: true,
        },

        {
            name: 'tags',
            type: InputTypeEnum.TEXT,
            label: 'Post Tags',
            rule: {rule: "required", value: null},
            defaultValue: '',
            required: true,
        },

        {
            name: 'content',
            type: InputTypeEnum.TEXT_AREA,
            label: 'Post Content',
            rule: {rule: "required", value: true},
            defaultValue: '',
            required: true,
        }
    ]
}
