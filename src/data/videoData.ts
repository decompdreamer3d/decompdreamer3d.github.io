// Sample data structure for videos
export const teaserData = {
  imageUrl: "../../images/teaser_13.png",
  prompts: [
    {
      description: "A knight in shining armor gallops on a brown horse, wearing a blue hat, holding a sword in his right hand. A princess sits beside him on the  same horse, wearing a flowing gown  and a jeweled crown.",
      title: "Complex Scene 1",
      methods: [
        { name: "DecompDreamer (Ours)", videoUrl: "/videos/decomp_knight_princess.mp4" },
        { name: "GraphDreamer", videoUrl: "/videos/graph_knight_princess.mp4" },
        { name: "GALA3D", videoUrl: "/videos/gala_knight_princess.mp4" },
        { name: "Trellis", videoUrl: "/videos/knight_princess_trellis.mp4" }
      ]
    },
    {
      description: "A boy wearing a backpack, wearing black sunglasses and wearing a black fanny pack.",
      title: "Complex Scene 2",
      methods: [
        { name: "DecompDreamer (Ours)", videoUrl: "/videos/decomp_boy_bag.mp4" },
        { name: "GraphDreamer", videoUrl: "/videos/graph_boy.mp4" },
        { name: "GALA3D", videoUrl: "/videos/gala_boy.mp4" },
        { name: "Trellis", videoUrl: "/videos/trellis_boy.mp4" }
      ]
    },
    {
      description: "Three Macaw parrots sharing a milkshake with three straws.",
      title: "Complex Scene 3",
      methods: [
        { name: "DecompDreamer (Ours)", videoUrl: "/videos/decomp_3_macaw.mp4" },
        { name: "GraphDreamer", videoUrl: "/videos/graph_3_macaw.mp4" },
        { name: "GALA3D", videoUrl: "/videos/gala_3_macaw.mp4" },
        { name: "Trellis", videoUrl: "/videos/three_macae_trellis.mp4" }
      ]
    }
  ]
};

// Expanded video data with more examples
export const videoData = [
  {
    id: 1,
    title: "A Wizard standing in front of a Wooden Desk, gazing into a Crystal Ball placed on the Wooden Desk, with a Stack of Ancient Spell Books sitting on the Wooden Desk and next to the crystal ball",
    mainVideoUrl: "/videos/Full_prompt.mp4",
    subVideos: [
      {
        title: "Wizard",
        videoUrl: "/videos/wizard.mp4"
      },
      {
        title: "Table",
        videoUrl: "/videos/table.mp4"
      },
      {
        title: "Crystal",
        videoUrl: "/videos/crystal_ball.mp4"
      },
      {
        title: "Books",
        videoUrl: "/videos/books.mp4"
      }
    ]
  },
  {
    id: 2,
    title: "Three macaw parrots sharing a milkshake with three straws",
    mainVideoUrl: "/videos/three_macaw.mp4",
    subVideos: [
      {
        title: "Macaw-1",
        videoUrl: "/videos/macaw1.mp4"
      },
      {
        title: "Macaw-2",
        videoUrl: "/videos/macaw2.mp4"
      },
      {
        title: "Macaw-3",
        videoUrl: "/videos/macaw3.mp4"
      },
      {
        title: "Milkshake",
        videoUrl: "/videos/milkshake.mp4"
      },
      {
        title: "Straw-1",
        videoUrl: "/videos/straw1.mp4"
      },
      {
        title: "Straw-2",
        videoUrl: "/videos/straw2.mp4"
      },
      {
        title: "Straw-3",
        videoUrl: "/videos/straw3.mp4"
      }
    ]
  },
  {
    id: 3,
    title: "An astronaut riding a chestnut horse",
    mainVideoUrl: "/videos/decomp_astro_horse_full.mp4",
    subVideos: [
      {
        title: "Astronaut",
        videoUrl: "/videos/decomp_astro_horse_astro.mp4"
      },
      {
        title: "Horse",
        videoUrl: "/videos/decomp_astro_horse_horse.mp4"
      }
    ]
  },
  {
    id: 4,
    title: "A Wizard standing in front of a Wooden Desk, gazing into a Crystal Ball placed on the Wooden Desk, with a Stack of Ancient Spell Books sitting on the Wooden Desk and next to the crystal ball",
    mainVideoUrl: "/videos/Full_prompt.mp4",
    subVideos: [
      {
        title: "Wizard",
        videoUrl: "/videos/wizard.mp4"
      },
      {
        title: "Table",
        videoUrl: "/videos/table.mp4"
      },
      {
        title: "Crystal",
        videoUrl: "/videos/crystal.mp4"
      },
      {
        title: "Books",
        videoUrl: "/videos/books.mp4"
      }
    ]
  },
  {
    id: 5,
    title: "A Wizard standing in front of a Wooden Desk, gazing into a Crystal Ball placed on the Wooden Desk, with a Stack of Ancient Spell Books sitting on the Wooden Desk and next to the crystal ball",
    mainVideoUrl: "/videos/Full_prompt.mp4",
    subVideos: [
      {
        title: "Wizard",
        videoUrl: "/videos/wizard.mp4"
      },
      {
        title: "Table",
        videoUrl: "/videos/table.mp4"
      },
      {
        title: "Crystal",
        videoUrl: "/videos/crystal.mp4"
      },
      {
        title: "Books",
        videoUrl: "/videos/books.mp4"
      }
    ]
  },
  {
    id: 6,
    title: "A Wizard standing in front of a Wooden Desk, gazing into a Crystal Ball placed on the Wooden Desk, with a Stack of Ancient Spell Books sitting on the Wooden Desk and next to the crystal ball",
    mainVideoUrl: "/videos/Full_prompt.mp4",
    subVideos: [
      {
        title: "Wizard",
        videoUrl: "/videos/wizard.mp4"
      },
      {
        title: "Table",
        videoUrl: "/videos/table.mp4"
      },
      {
        title: "Crystal",
        videoUrl: "/videos/crystal.mp4"
      },
      {
        title: "Books",
        videoUrl: "/videos/books.mp4"
      }
    ]
  },
  {
    id: 7,
    title: "A Wizard standing in front of a Wooden Desk, gazing into a Crystal Ball placed on the Wooden Desk, with a Stack of Ancient Spell Books sitting on the Wooden Desk and next to the crystal ball",
    mainVideoUrl: "/videos/Full_prompt.mp4",
    subVideos: [
      {
        title: "Wizard",
        videoUrl: "/videos/wizard.mp4"
      },
      {
        title: "Table",
        videoUrl: "/videos/table.mp4"
      },
      {
        title: "Crystal",
        videoUrl: "/videos/crystal.mp4"
      },
      {
        title: "Books",
        videoUrl: "/videos/books.mp4"
      }
    ]
  },
  {
    id: 8,
    title: "A Wizard standing in front of a Wooden Desk, gazing into a Crystal Ball placed on the Wooden Desk, with a Stack of Ancient Spell Books sitting on the Wooden Desk and next to the crystal ball",
    mainVideoUrl: "/videos/Full_prompt.mp4",
    subVideos: [
      {
        title: "Wizard",
        videoUrl: "/videos/wizard.mp4"
      },
      {
        title: "Table",
        videoUrl: "/videos/table.mp4"
      },
      {
        title: "Crystal",
        videoUrl: "/videos/crystal.mp4"
      },
      {
        title: "Books",
        videoUrl: "/videos/books.mp4"
      }
    ]
  }
];