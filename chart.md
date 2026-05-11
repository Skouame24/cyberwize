# 🛡️ Charte Graphique Cyberwize

Ce document définit la palette de couleurs officielle de Cyberwize, alignée sur le site [cyberwizefamily.com](https://cyberwizefamily.com/).

## 🎨 Couleurs Principales

| Rôle | Couleur | Hex | Usage |
| :--- | :--- | :--- | :--- |
| **Primaire** | ![#F28C38](https://via.placeholder.com/15/F28C38/000000?text=+) `#F28C38` | Orange vibrant | Boutons, Logo, Highlights |
| **Secondaire** | ![#0A0E14](https://via.placeholder.com/15/0A0E14/000000?text=+) `#0A0E14` | Navy Sombre | Background Principal |
| **Accent** | ![#00D1FF](https://via.placeholder.com/15/00D1FF/000000?text=+) `#00D1FF` | Cyan / Glow | Effets Cyber, Bordures actives |
| **Surface** | ![#141B26](https://via.placeholder.com/15/141B26/000000?text=+) `#141B26` | Navy Clair | Cartes, Sections, Inputs |

## 📂 Gestion Technique (Tailwind CSS v4)

Les couleurs sont gérées dans `styles/globals.css` via des variables CSS.

### Variables de Marque (Brand)
Utilisez ces variables pour toute nouvelle modification :
- `var(--color-brand-orange)`
- `var(--color-brand-navy)`
- `var(--color-brand-cyan)`

### Mapping Sémantique
Utilisez les classes Tailwind sémantiques pour plus de flexibilité :
- `text-primary` / `bg-primary`
- `bg-background`
- `text-accent`
- `bg-surface`

---

> [!NOTE]
> Les anciennes classes `cyber-*` sont toujours supportées via un mapping automatique pour assurer la compatibilité avec le code existant.
