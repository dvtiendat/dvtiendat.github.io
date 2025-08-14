export const siteConfig = {
  name: "Dat Dao",
  title: "Senior Undergraduate Data Science & AI Student @ HUST",
  description: "Portfolio website of Ryan Fitzgerald",
  accentColor: "#26570fce",
  social: {
    email: "dvtiendat.work@gmail.com",
    linkedin: "https://linkedin.com/in/dvtiendatwork",
    github: "https://github.com/dvtiendat",
  },
  aboutMe:
    "As a final-year Data Science and AI student, I am passionate about advancing my expertise in AI and machine learning, with a focus on Natural Language Processing and Computer Vision. My research interests center on knowledge distillation and embedding models.",
  skills: ["Natural Language Processing", "Large Language Models", "Computer Vision", "Machine Learning"],
  projects: [
    {
      name: "Medical Pretraining Approaches on Lungs Disease Classification",
      description:
        "Implemented Self-distillation with No Labels (DINO) for self-supervised learning on chest X-ray images, enabling effective pretraining of Vision Transformer for lung disease classification. Investigated the impact of synthetic medical images generated via ACGAN and DCGAN on pretraining performance.",
      link: "https://github.com/dvtiendat/contrastive-synthesis-medcls",
      skills: ["Vision Transformer", "Self-supervised Learning", "Generative Adversarial Network", "Medical Imaging"],
    },
    {
      name: "Lungs Radiography Image Analysis",
      description:
        "Implemented a deep learning pipeline to analyze lung X-ray images, performing classification to detect lung conditions, followed by segmentation to identify affected regions. Deployed the solution with Gradio on HuggingFace Spaces for real-time predictions.",
      link: "https://github.com/dvtiendat/Lungs-Radiography-Analysis",
      skills: ["Classification", "Medical Imaging"],
    },
    {
      name: "Day-to-Night Image Translation for YOLOv11 Detection Enhancement",
      description:
        "Applied CycleGAN to generate synthetic day-to-night and night-to-day traffic surveillance images, augmenting training dataset for improved generalization. Enhanced YOLOv11 model performance for detecting different traffic types under varying lighting conditions.",
      link: "https://github.com/dvtiendat/Day2night-Style-Transfer",
      skills: ["Object Detection", "YOLO", "Generative Adversarial Network"],
    },
  ],
  experience: [
    {
      company: "Viettel Telecom",
      title: "AI Engineer Intern",
      dateRange: "Feb 2025 - Present",
      bullets: [
        "Designed and implemented multi-agent household personal AI systems using LangGraph and LangChain for agent coordination and task orchestration",
        "Curated datasets and applied state-of-the-art vision architectures and vision-language models (VLMs) for document anti-spoofing",
        "Conducted experiments and enhanced the document OCR pipeline for improved accuracy and robustness",
      ],
    },
    {
      company: "Hanoi University of Science and Technology",
      title: "Teaching Assistant",
      dateRange: "Aug 2024 - Jan 2025",
      bullets: [
        "Provided guidance and support to 40+ students per session in Introduction to Programming (Python)",
        "Explained programming concepts, assisted with resource finding, and helped with debugging",
        "Offered constructive feedback to enhance students' understanding and coding efficiency",
      ],
    },
    {
      company: "Computer Vision Lab - BK.AI",
      title: "Research Member",
      dateRange: "Nov 2022 - Nov 2023",
      bullets: [
        "Studied neural network architectures including Vision Transformer (ViT) and CNNs for computer vision tasks",
        "Applied self-supervised learning techniques (MAE, I-JEPA) to thyroid ultrasound image analysis"
      ],
    },
  ],
  education: [
    {
      school: "Hanoi University of Science and Technology",
      degree: "Bachelor of Data Science and Artificial Intelligence",
      dateRange: "2022 - Present",
      achievements: [
        // "Current CGPA: 3.4"
      ],
    },
  ],
};
