const projectsData = {
	greendev: {
		title: "GreenDev",
		subtitle: "Sustainable Development Hub",
		description: "A comprehensive platform built to drive sustainable development through educational content and community networking. Independently developed with a focus on responsive UI/UX design, smooth animations, and robust backend functionality. The platform features user authentication, content management, and real-time collaboration tools.",
		image: "./src/assets/projects/green-demo.png",
		tech: ["React", "Node.js", "MongoDB", "Express", "CSS3", "Bootstrap"],
		liveUrl: "https://green-dev-seven.vercel.app/",
		githubUrl: "https://github.com/nkaryoli/greendev"
	},
	nkqrcode: {
		title: "Nk-QrCode",
		subtitle: "QR Code Generator and Personalization",
		description: "A modern and intuitive QR code generator built with cutting-edge technologies. Features include real-time preview, multiple customization options (colors, logos, patterns), export in various formats, and a clean, user-friendly interface. Perfect for creating branded QR codes for marketing, events, or personal use.",
		image: "./src/assets/projects/nk-demo.png",
		tech: ["React", "TypeScript", "Tailwind CSS", "QRCode.js", "Vite"],
		liveUrl: "https://nk-qr-code.vercel.app/",
		githubUrl: "https://github.com/nkaryoli/nk_qrCode/tree/dev"
	},
	qraft: {
		title: "Qraft",
		subtitle: "Digital Identity & QR Badge Platform",
		description: "Winner project at the Midudev Hackathon. A full-stack solution for digital identity management that allows organizations to create, manage, and distribute custom QR badges. Built with Clerk for authentication and Supabase with Row Level Security for data protection. Features include team management dashboard, real-time badge generation, and access control systems.",
		image: "./src/assets/projects/qraft-demo.png",
		tech: ["React", "TypeScript", "Supabase", "Clerk", "Tailwind CSS", "PostgreSQL"],
		liveUrl: "https://qraft-two.vercel.app/",
		githubUrl: "https://github.com/nkaryoli/qraft"
	},
	simon: {
		title: "Simon Says",
		subtitle: "Interactive Memory Game",
		description: "Simon Says is an interactive 3D memory game developed with Three.js, where players must observe, memorize, and reproduce dynamically generated color sequences. The project focuses on using 3D scenes, animations, and real-time interactions to enhance a classic game experience. The game logic is tightly integrated with the Three.js rendering loop, allowing visual feedback such as lighting changes, color transitions, and animated responses to user input. Each successful round increases the sequence length, creating a progressively challenging experience while maintaining smooth performance. This project was designed as an exploration of 3D rendering on the web, combining core JavaScript logic with Three.js concepts such as scenes, cameras, meshes, materials, and animation timing.",
		image: "./src/assets/projects/simon-demo.png",
		tech: ["HTML5", "CSS3", "JavaScript", "Three.js", "Responsive Design"],
		liveUrl: "https://game-simon-lovat.vercel.app/",
		githubUrl: "https://github.com/nkaryoli/game_simon"
	},
	mussickids: {
		title: "Mussic Kids",
		subtitle: "Interactive Online Music School",
		description: "An engaging web application that brings music education to life through interactive virtual instruments. Users can play piano, drums, and other instruments using their keyboard and mouse. Built entirely with Vanilla JavaScript to demonstrate strong fundamentals in DOM manipulation and audio API integration. Features include recording capabilities, playback, and multiple instrument options.",
		image: "./src/assets/projects/school-demo.png",
		tech: ["HTML5", "CSS3", "JavaScript", "Web Audio API", "Responsive Design"],
		liveUrl: "https://nkaryoli.github.io/Mussic_Kids/",
		githubUrl: "https://github.com/nkaryoli/Mussic_Kids"
	},
	story: {
		title: "StoryVerse",
		subtitle: "Book & Media Explorer",
		description: "StoryVerse is a modern book and media exploration web application where users can browse books by category, search titles and apply advanced filters — all wrapped in a sleek, responsive interface. Built with Next.js (App Router), TypeScript, and Tailwind CSS, this project showcases a structured layout with dynamic filtering, interactive cards, and smooth transitions. The app consumes external data (e.g., book cover images via the Open Library API) and presents it in an engaging way that’s both functional and visually appealing.",
		image: "./src/assets/projects/story-demo.png",
		tech: ["Next.js", "TypeScript", "Tailwind CSS", "Responsive Design", "Framer Motion"],
		liveUrl: "https://story-verse-sable.vercel.app/",
		githubUrl: "https://github.com/nkaryoli/StoryVerse"
	},
	midnight: {
		title: "Treasure Game",
		subtitle: "2D Desktop Game (Java)",
		description: "Midnight Thief is a 2D desktop game fully designed and developed by me using Java, with a strong focus on Object-Oriented Programming (OOP) principles. The project was conceived as a complete game experience, from core mechanics and logic to visual identity. The game architecture is based on clean class hierarchies, encapsulation, and separation of responsibilities- This approach makes the codebase easier to extend and maintain. In addition to the programming aspect, all visual assets were created by me using AI tools, reinforcing the creative direction of the project and giving it a unique atmosphere aligned with the game’s theme.",
		image: "./src/assets/projects/treasure-demo.png",
		tech: ["Java", "Object-Oriented Programming", "Custom AI", "Desktop Game"],
		liveUrl: "./src/assets/treasure-windows.zip",
		githubUrl: "https://github.com/nkaryoli/Midnight-Thief_2d-Java-Game"
	},
	femcodersclub: {
		title: "FemCodersClub",
		subtitle: "Community & Event Management App",
		description: "FemCodersClub is a collaborative full-stack web application developed as part of the FemCodersClub community project. The app was designed to manage members, volunteers, sponsorships and community events, providing a complete admin experience and an intuitive user interface for event participation and attendance tracking. The project was developed using modern web technologies — React (Front-end), TypeScript, Nest.js (Back-end), and a SQL database — demonstrating a professional full-stack architecture supported by an API documented with Swagger. It was built within a team environment using Scrum methodology, where I served as Scrum Master and Developer, coordinating tasks, planning sprints and contributing to both front-end and back-end development.",
		image: "./src/assets/projects/femcodersclub-demo.png",
		tech: ["React", "TypeScript", "Nest.js", "SQL", "Responsive Design"],
		liveUrl: "https://www.femcodersclub.com/",
		githubUrl: "https://github.com/nkaryoli/femCodersClub_Project"
	}
};


const modal = document.getElementById('projectModal');
const closeBtn = document.getElementById('closeModal');
const viewDetailsBtns = document.querySelectorAll('.view-details-btn');

// Abrir modal
viewDetailsBtns.forEach(btn => {
	btn.addEventListener('click', (e) => {
		e.stopPropagation(); // Evitar que el evento se propague
		const projectId = btn.getAttribute('data-project');
		const project = projectsData[projectId];

		if (project) {
			let imageSrc = project.image;
			// Adjust image path if we are on the projects page (inside src/pages/)
			if (window.location.pathname.includes('projects.html') || window.location.pathname.includes('/pages/')) {
				imageSrc = imageSrc.replace('./src/', '../');
			}
			document.getElementById('modalImage').src = imageSrc;
			document.getElementById('modalTitle').textContent = project.title;
			document.getElementById('modalSubtitle').textContent = project.subtitle;
			document.getElementById('modalDescription').textContent = project.description;
			let liveUrl = project.liveUrl;
			const liveLink = document.getElementById('liveLink');

			// Check if it's a download link (ZIP file)
			if (liveUrl.endsWith('.zip')) {
				liveLink.setAttribute('download', '');
				liveLink.textContent = 'Download Game';
				// Adjust path if on projects page
				if (window.location.pathname.includes('projects.html') || window.location.pathname.includes('/pages/')) {
					liveUrl = liveUrl.replace('./src/', '../');
				}
			} else {
				liveLink.removeAttribute('download');
				liveLink.textContent = 'View Live Project';
			}

			liveLink.href = liveUrl;
			document.getElementById('githubLink').href = project.githubUrl;

			// Tecnologías
			const techStack = document.getElementById('techStack');
			techStack.innerHTML = project.tech.map(tech =>
				`<span class="tech-badge">${tech}</span>`
			).join('');

			modal.classList.add('active');
			document.body.style.overflow = 'hidden';
		}
	});
});

// Cerrar modal
closeBtn.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
	if (e.target === modal) {
		closeModal();
	}
});

function closeModal() {
	modal.classList.remove('active');
	document.body.style.overflow = 'auto';
}

// Cerrar con tecla ESC
document.addEventListener('keydown', (e) => {
	if (e.key === 'Escape' && modal.classList.contains('active')) {
		closeModal();
	}
});