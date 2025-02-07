# Personal Portfolio Website

A unique, interactive portfolio website inspired by tiling window managers. Built with React, TypeScript, and TailwindCSS.

![Portfolio Preview](https://raw.githubusercontent.com/pandeymangg/portfolio/refs/heads/main/src/assets/preview.png)

## Features

- **Tiling Window Manager Interface**: Inspired by Linux tiling window managers like i3, qtile, and hyprland
- **Interactive Windows**: Drag, resize, and rearrange windows dynamically
- **Dark/Light Mode**: Full theme support with custom color schemes
- **Responsive Design**: Optimized for both desktop and mobile viewing
- **Window Manager Configuration**: Customize gap sizes, border radius, colors, enable/disable tiling, etc.

### How it Works

1. **Base Structure**

   - Each node is either a Leaf (window) or a Root (container)
   - Leaves contain actual components
   - Roots contain exactly two children (either Leaf or Root)

2. **Layout Algorithm**

   - For 1-2 components: Create a simple root with direct leaf children
   - For 3+ components:
     ```
     Root
     ├── Leaf 1
     └── Root
         ├── Leaf 2
         └── Root
             ├── Leaf 3
             └── ...
     ```

3. **Split Direction**

   - Splits alternate between horizontal and vertical based on aspect ratio
   - Horizontal split when width > height
   - Vertical split when height > width

4. **Features**
   - Dynamic resizing with neighbor compensation
   - Drag and drop window rearrangement
   - Window removal with automatic tree rebalancing
   - Configurable gaps and borders

### Example Configuration

```typescript
{
  type: "root",
  id: "unique-id",
  leaves: [
    {
      type: "child",
      id: "window-1",
      component: <Component />
    },
    {
      type: "root",
      id: "unique-id-2",
      leaves: [/* more windows */]
    }
  ]
}
```

The implementation combines the efficiency of binary trees with the flexibility needed for a modern web interface, while maintaining the familiar feel of traditional tiling window managers.
