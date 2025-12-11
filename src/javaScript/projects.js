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
	mussickids: {
		title: "Mussic Kids",
		subtitle: "Interactive Online Music School",
		description: "An engaging web application that brings music education to life through interactive virtual instruments. Users can play piano, drums, and other instruments using their keyboard and mouse. Built entirely with Vanilla JavaScript to demonstrate strong fundamentals in DOM manipulation and audio API integration. Features include recording capabilities, playback, and multiple instrument options.",
		image: "./src/assets/projects/school-demo.png",
		tech: ["HTML5", "CSS3", "JavaScript", "Web Audio API", "Responsive Design"],
		liveUrl: "https://nkaryoli.github.io/Mussic_Kids/",
		githubUrl: "https://github.com/nkaryoli/Mussic_Kids"
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
			document.getElementById('modalImage').src = project.image;
			document.getElementById('modalTitle').textContent = project.title;
			document.getElementById('modalSubtitle').textContent = project.subtitle;
			document.getElementById('modalDescription').textContent = project.description;
			document.getElementById('liveLink').href = project.liveUrl;
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