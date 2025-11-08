# WAXA Digital Marketing Website - Design Guidelines

## Design Approach
**Reference-Based Approach**: Drawing inspiration from Hi Social's clean, conversion-focused design with modern European marketing agency aesthetics. This approach emphasizes clarity, generous whitespace, and strategic visual hierarchy to drive conversions.

## Brand Visual Identity

**Color Palette**
- Primary: Brand Blue (#007bff) - used for primary CTAs, key headings, interactive elements
- Secondary: Brand Green (#00c76a) - used for success states, secondary CTAs, highlights
- Base: Pure White (#ffffff) backgrounds throughout
- Neutrals: Subtle grays for text hierarchy (dark gray for body text, medium gray for supporting text)

**Typography System**
- Headlines: Large, bold sans-serif (60-72px for hero, 48px for section headers, 32px for subsections)
- Body: Clean, readable sans-serif (16-18px base size)
- Weight hierarchy: Bold (700) for headers, Medium (500) for subheads, Regular (400) for body
- Generous line-height (1.6-1.8) for readability

## Layout Architecture

**Spacing System**
Use Tailwind units: 4, 6, 8, 12, 16, 20, 24 for consistent rhythm
- Section padding: py-20 to py-32 (desktop), py-12 to py-16 (mobile)
- Component spacing: gap-8 to gap-12 for grids
- Content containers: max-w-7xl with px-6 to px-8

**Grid Structure**
- Hero: Full-width with centered content, max-w-4xl for text
- Problem/Solution cards: 2-column grid (lg:grid-cols-2)
- Benefits/Advantages: 3-column grid (lg:grid-cols-3)
- Case studies: Asymmetric layouts with large imagery and metrics callouts

## Page-Specific Designs

**Hero Section**
- Full-width background with subtle gradient overlay
- Arrow/graph motif as decorative element (subtle, not dominant)
- Centered content with large headline, supporting text
- Dual CTAs: Primary (blue, bold) + Secondary (outlined/ghost style)
- Minimum 80vh height for impact

**Problem vs Solution Section**
- Two-column comparison layout
- Left column: "Without WAXA" (problems) - muted styling
- Right column: "With WAXA" (solutions) - vibrant, blue/green accents
- Icon or illustration for each pair
- Clear visual separation between columns

**Process/Approach Steps**
- Horizontal timeline or numbered step cards
- Large numbers or icons for each step
- Arrow connectors between steps
- White cards with subtle shadows on white background

**Advantages Grid**
- 3-column card grid (2-col on tablet, 1-col mobile)
- Each card: Icon/illustration + headline + 2-3 sentence description
- Hover lift effect (subtle elevation change)
- Consistent card heights

**References/Case Studies**
- Client logos grid: 4-6 logos per row, grayscale with color on hover
- Featured case study: Large hero image + metrics callouts (big numbers with green accent)
- Before/after metrics comparison
- Challenge → Solution → Results narrative structure

**FAQ Section**
- Single column, max-w-3xl centered
- Accordion-style with + icon that rotates to × when open
- Generous vertical spacing between questions
- Subtle dividers between items

## Component Library

**Navigation**
- Transparent initially, white background on scroll with subtle shadow
- Logo left, menu items right
- Blue underline indicator for active/hover states
- Mobile: Hamburger menu with full-screen overlay

**Cards**
- White background with subtle shadow (shadow-md)
- Rounded corners (rounded-lg or rounded-xl)
- Padding: p-6 to p-8
- Hover: Lift effect (translate-y-1) + increased shadow

**Buttons**
- Primary: Blue background, white text, generous padding (px-8 py-4)
- Secondary: White background, blue border and text
- Rounded-full or rounded-lg
- Blurred background when overlaying images

**Forms**
- Clean, minimal inputs with subtle borders
- Focus states: Blue border with subtle glow
- Generous spacing between fields (gap-6)
- Labels above inputs, placeholder text for guidance

**Footer**
- Multi-column layout (4 columns on desktop)
- Sections: Quick Links, Services, Contact Info, Legal
- Social icons with hover color transitions
- Subtle top border separator

## Animation Strategy

**Minimal, Purpose-Driven Animations**
- Section fade-in on scroll (Framer Motion)
- Card hover lift (subtle, 4px translate-y)
- Metric counters: Animated count-up when in viewport
- Navbar transition: Fade background, smooth shadow appearance
- CTA pulse: Subtle scale animation on hero button (optional, not distracting)

## Images Strategy

**Hero Section**: Yes, large background image required
- Full-width, modern office/team collaboration scene OR abstract tech/growth visual
- 1920x1080 minimum, optimized for web
- Subtle gradient overlay for text legibility

**Additional Images**
- Team photos in Advantages section (authentic, professional)
- Client workspace/results imagery in case studies
- Process illustrations (can be vector graphics instead of photos)
- Keep imagery consistent in style (photography vs. illustration)

**Image Placement**
- Hero: Full-width background
- Case studies: Large featured images (50-60% of section width)
- Benefits cards: Icon or small illustration per card
- About/Approach: Supporting imagery alongside process steps

## Key Design Principles

1. **Conversion Focus**: Every section drives toward consultation/contact
2. **Breathing Room**: Never cramped - generous whitespace between elements
3. **Visual Hierarchy**: Clear progression from headlines → subheads → body → CTAs
4. **Professional Minimalism**: Clean, uncluttered, confident
5. **Strategic Color**: Blue/green used purposefully, not everywhere
6. **Mobile-First**: All layouts collapse gracefully to single column