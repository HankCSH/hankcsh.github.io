export const experiences = [
	{
		company: 'The University of Hong Kong',
		time: 'Nov 2022 - Aug 2023',
		title: 'Research Assistant',
		location: 'HKSAR, China',
		description: '',
	},
	{
		company: 'Varadise Limited',
		time: 'Feb 2021 - Nov 2021',
		title: 'Assistant Digital Project Manager',
		location: 'HKSAR, China',
		description: '',
	},
	{
		company: 'Architecture & Decoration Technology Group',
		time: 'June 2019 - Dec 2020',
		title: 'Assistant Project Manager',
		location: 'HKSAR, China',
		description: '',
	},	
	{
		company: 'Colliers, Strategic Market Intelligence Team',
		time: 'Dec 2018 - Apr 2019',
		title: 'Summer Internship & part-time Internship',
		location: 'HKSAR, China',
		description: '',
	},	
	{
		company: 'CBRE, Project Management Department',
		time: 'June 2018 - Aug 2018',
		title: 'Summer Internship',
		location: 'HKSAR, China',
		description: '',
	},	
	{
		company: 'Pamfleet Asset Management (Shanghai Office)',
		time: 'Jan 2018 - Jan 2018',
		title: 'Winter Internship',
		location: 'Shanghai, China',
		description: '',
	},	
];

export const education = [
	{
		school: 'Hong Kong Polytechnic University',
		time: 'Sept 2015 - June 2019',
		degree: 'Bachelor of Science (Hons) in Building Engineering and Management',
		location: 'HKSAR, China',
		description: '',
	},
	{
		school: 'The University of Hong Kong',
		time: 'Aug 2020 - May 2022',
		degree: 'Master of Science in Integrated Project Delivery',
		location: 'HKSAR, China',
		description: '',
	},
	{
		school: 'The University of Hong Kong',
		time: 'Sep 2023 - Present',
		degree: 'Doctor of Philosophy',
		location: 'HKSAR, China',
		description: '',
	},	
];

export const skills = [
  {
    title: 'Programming & Scripting',
    description: 'Python (data processing, ML), basic C# for Unity scripts',
  },
  {
    title: 'BIM & CAD Software',
    description: 'Revit, AutoCAD, Navisworks, Dynamo, Vectorworks',
  },
  {
    title: '3D & Game Engines',
    description: 'Blender, Unity, Unreal Engine, Twinmotion',
  },
  {
    title: 'Data Analytics & Visualization',
    description: 'CloudCompare (point cloud analysis), Orange Data Mining, Tableau',
  },
];

export const publications = [
	{
		title: 'Interactive BIM-Based VR: A Case Study of Doors',
		authors: 'Sou-Han Chen, Xue Fan', 
		journal: 'In book: Advances in Information Technology in Civil and Building Engineering',
		time: 'August 2023',
		link: 'https://doi.org/10.1007/978-3-031-32515-1_17?urlappend=%3Futm_source%3Dresearchgate.net%26utm_medium%3Darticle',
		abstract: "The adoption of virtual reality (VR) in the construction industry provides an immersive experience for users to view and interact with Building information modeling (BIM). However, in the current practice, the VR experience is created manually, which is time-consuming and does not refer to other validated data. This study proposes an automatic BIM to interactive VR method based on Revit and Unreal Engine in three steps. First, a bounding box-based segmentation is conducted in Revit through Dynamo for classifying the motion-bearing components. Then the BIM along with the segmentation results are imported to Unreal Engine for components mapping and interactive behavior selection. Finally, Oculus Quest presents an interactive BIM-based VR experience to users. A case study of BIM doors was conducted to validate the proposed method. In the output VR models, users can control and interact with swing doors through the touch controller of the VR headset. Four interactive behaviors of the door were realized for interactive and experiencing user interactions. The findings confirmed the feasibility as well as automation of the proposed method, for faster BIM-to-VR content creation.KeywordsBuilding information modelingVirtual realityInteractiveMotion-bearing componentsRevitUnreal engine",
	},
		{
		title: 'Automatic BIM detailing using deep features of 3D views',
		authors: 'Sou-Han Chen, Xue Fan', 
		journal: 'Automation in Construction',
		time: 'April 2023',
		link: 'https://www.sciencedirect.com/science/article/abs/pii/S0926580523000407?via%3Dihub',
		abstract: "Building information modeling (BIM) detailing, the process of adding the level of graphical and non-graphical details, is required in many BIM stages and applications; however, manual BIM detailing is a resource-intensive and costly process. This study proposes an automatic BIM detailing method based on deep features (DFs) of BIM 3D views in three steps. First, a BIM's 3D view and semantics were extracted automatically. Then, machine learning (ML) algorithms learned the DFs to predict the target BIM's invisible details. Finally, the details were automatically added to BIM by a Dynamo program. A case study of motion-bearing component detailing for 86 doors through three DFs and five ML algorithms revealed that DFs improved the automatic detailing results comprehensively (29 out of 32 scenarios) and significantly. This paper's contribution includes an effective, novel approach for automatic BIM detailing as well as quantified experimental evidence about the effectiveness of DFs for BIM applications.",
	},
];
