export const auditSections = [
  {
    name: "Social Media Presence",
    criteria: [
      {
        name: "Follower Count",
        score: 3,
        description: [
          "1: Very low (<1,000 followers)",
          "2: Low (1,000–5,000 followers)",
          "3: Moderate (5,000–10,000 followers)",
          "4: High (10,000–50,000 followers)",
          "5: Very high (>50,000 followers)"
        ]
      },
      {
        name: "Engagement Rate",
        score: 3,
        description: [
          "1: Very low (<1%)",
          "2: Low (1–2%)",
          "3: Moderate (2–5%)",
          "4: High (5–10%)",
          "5: Very high (>10%)"
        ]
      },
      {
        name: "Posting Frequency",
        score: 3,
        description: [
          "1: Rarely (less than once a month)",
          "2: Infrequently (once a month)",
          "3: Regularly (once a week)",
          "4: Frequently (several times a week)",
          "5: Very frequently (daily or more)"
        ]
      },
      {
        name: "Content Quality",
        score: 3,
        description: [
          "1: Poor (low-resolution images, inconsistent branding)",
          "2: Fair (some good content but inconsistent)",
          "3: Good (consistent branding, decent quality)",
          "4: Very good (high-quality visuals, engaging content)",
          "5: Excellent (professional-grade content, highly engaging)"
        ]
      },
      {
        name: "Use of Hashtags and Collaborations",
        score: 3,
        description: [
          "1: No use of hashtags or collaborations",
          "2: Minimal use",
          "3: Moderate use",
          "4: Good use of relevant hashtags and some collaborations",
          "5: Excellent use of strategic hashtags and frequent collaborations"
        ]
      }
    ]
  },
  {
    name: "Website",
    criteria: [
      {
        name: "Design Aesthetics",
        score: 3,
        description: [
          "1: Very poor (outdated, cluttered)",
          "2: Poor (lacks visual appeal)",
          "3: Average (functional but not striking)",
          "4: Good (clean, modern design)",
          "5: Excellent (visually stunning, aligns with brand)"
        ]
      },
      {
        name: "User Experience",
        score: 3,
        description: [
          "1: Very difficult to navigate",
          "2: Somewhat difficult",
          "3: Average usability",
          "4: Easy to navigate",
          "5: Extremely user-friendly"
        ]
      },
      {
        name: "Functionality",
        score: 3,
        description: [
          "1: Many broken links or errors",
          "2: Some functionality issues",
          "3: Mostly functional",
          "4: Fully functional with minor issues",
          "5: Perfectly functional"
        ]
      },
      {
        name: "Mobile Responsiveness",
        score: 3,
        description: [
          "1: Not mobile-friendly",
          "2: Poor mobile experience",
          "3: Acceptable on mobile",
          "4: Good mobile experience",
          "5: Excellent mobile optimization"
        ]
      },
      {
        name: "SEO Optimization",
        score: 3,
        description: [
          "1: No SEO efforts",
          "2: Minimal SEO",
          "3: Basic SEO practices",
          "4: Good SEO implementation",
          "5: Advanced SEO strategies in place"
        ]
      }
    ]
  },
  // Add more sections here following the same pattern
];