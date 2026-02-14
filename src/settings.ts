export const profile = {
	fullName: 'CHEN, Sou-Han',
	title: 'PhD Candidate',
	institute: 'The University of Hong Kong, Department of Real Estate and Construction',
	author_name: 'Sou-Han Chen', // Author name to be highlighted in the papers section
	research_areas: [
		{ title: 'Scan-to-BIM', description: 'Automated generation of Building Information Models from 3D scans', field: 'Scan-to-BIM' },
		{ title: 'Point Cloud Data', description: 'Processing, analysis, and AECO applications of point cloud data', field: 'Point Cloud Data' },
		{ title: 'Architectural Openings', description: 'Computer vision for identifying maneuvering/passable spaces in built environments', field: 'Architecture Opening' },
		{ title: 'Computer Vision', description: 'Machine learning applications for BIM and point cloud processing', field: 'Computer Vision' },
	],
}

// Set equal to an empty string to hide the icon that you don't want to display
export const social = {
	email: 'hankchen@connect.hku.hk',
	linkedin: 'https://www.linkedin.com/in/hankchenhk/',
	x: '',
	bluesky: '',
	github: 'https://github.com/HankCSH',
	gitlab: '',
	scholar: 'https://www.researchgate.net/profile/Sou-Han-Chen',
	inspire: '',
	arxiv: '',
	orcid: 'https://orcid.org/0000-0003-0511-7518',
}

export const template = {
	website_url: 'https://hankcsh.github.io', // https://localhost:4321 for local development
	menu_left: false,
	transitions: true,
	lightTheme: 'garden', // Select one of the Daisy UI Themes or create your own
	darkTheme: 'sunset', // Select one of the Daisy UI Themes or create your own
	excerptLength: 200,
	postPerPage: 5,
    base: '' // Repository name starting with /
}

export const seo = {
	default_title: 'CHEN, Sou-Han | PhD Candidate | HKU Real Estate & Construction',
	default_description: 'PhD Candidate in Real Estate and Construction at The University of Hong Kong. Research in Scan-to-BIM, Point Cloud Data, and Computer Vision for AECO.',
	default_image: '/images/astro-academia.png',
}
