
import React, { useState } from 'react';
import { Card, CardHeader, CardPreview } from '@fluentui/react-components';
import { motion } from 'framer-motion';
import { Button } from '@fluentui/react-components';
import styles from './App.module.css';
import { useTheme } from './Context/ThemeContext';

const towers = ['Tower A', 'Tower B', 'Tower C'];
const floors = Array.from({ length: 15 }, (_, i) => `Floor ${15 - i}`);

const towerImages: Record<string, string> = {
  'Tower A': '/public/ca720d8d-0111-4841-9fb3-6d8358f29674.jpg',
  'Tower B': '/public/vertical-shot-white-building-clear-sky.jpg',
  'Tower C': '/public/view-3d-graphic-building.jpg',
};

const floorsImages: Record<string, Record<string, string>> = {
  'Tower A': {
    'Floor 1': '/public/3d-contemporary-empty-room-picture-frame.jpg',
    'Floor 2': '/public/3d-render-contemporary-interior-living-space.jpg',
    'Floor 3': '/public/ai-generated-modern-styled-entryway.jpg',
    'Floor 4': '/public/modern-elegant-home-interior-design.jpg',
    'Floor 5': '/public/modern-empty-room (1).jpg',
    'Floor 6': '/public/modern-empty-room.jpg',
    'Floor 7': '/public/neon-robot-vacuum-cleaner.jpg',
    'Floor 8': '/public/modern-styled-entryway.jpg',
    'Floor 9': '/public/3d-contemporary-empty-room-picture-frame.jpg',
    'Floor 10': '/public/3d-render-contemporary-interior-living-space.jpg',
    'Floor 11': '/public/ai-generated-modern-styled-entryway.jpg',
    'Floor 12': '/public/modern-elegant-home-interior-design.jpg',
    'Floor 13': '/public/modern-empty-room (1).jpg',
    'Floor 14': '/public/modern-empty-room.jpg',
    'Floor 15': '/public/modern-styled-entryway.jpg',
  },
  'Tower B': {
    'Floor 1': '/public/3d-contemporary-empty-room-picture-frame.jpg',
    'Floor 2': '/public/3d-render-contemporary-interior-living-space.jpg',
    'Floor 3': '/public/ai-generated-modern-styled-entryway.jpg',
    'Floor 4': '/public/modern-elegant-home-interior-design.jpg',
    'Floor 5': '/public/modern-empty-room (1).jpg',
    'Floor 6': '/public/modern-empty-room.jpg',
    'Floor 7': '/public/neon-robot-vacuum-cleaner.jpg',
    'Floor 8': '/public/modern-styled-entryway.jpg',
    'Floor 9': 'https://images.unsplash.com/photo-1522156373667-4c7234bbd804?auto=format&fit=crop&w=200&q=60',
    'Floor 10': '/public/3d-render-contemporary-interior-living-space.jpg',
    'Floor 11': '/public/ai-generated-modern-styled-entryway.jpg',
    'Floor 12': '/public/modern-elegant-home-interior-design.jpg',
    'Floor 13': '/public/modern-empty-room (1).jpg',
    'Floor 14': '/public/modern-empty-room.jpg',
    'Floor 15': 'https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=200&q=60',
  },
  'Tower C': {
    'Floor 1': '/public/neon-robot-vacuum-cleaner.jpg',
    'Floor 2': '/public/modern-styled-entryway.jpg',
    'Floor 3': 'https://images.unsplash.com/photo-1522156373667-4c7234bbd804?auto=format&fit=crop&w=200&q=60',
    'Floor 4': '/public/3d-render-contemporary-interior-living-space.jpg',
    'Floor 5': '/public/ai-generated-modern-styled-entryway.jpg',
    'Floor 6': '/public/modern-elegant-home-interior-design.jpg',
    'Floor 7': '/public/modern-empty-room (1).jpg',
    'Floor 8': '/public/modern-empty-room.jpg',
    'Floor 9': 'https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=200&q=60',
    'Floor 10': '/public/3d-contemporary-empty-room-picture-frame.jpg',
    'Floor 11': '/public/3d-render-contemporary-interior-living-space.jpg',
    'Floor 12': '/public/ai-generated-modern-styled-entryway.jpg',
    'Floor 13': '/public/modern-elegant-home-interior-design.jpg',
    'Floor 14': '/public/modern-empty-room (1).jpg',
    'Floor 15': '/public/modern-empty-room.jpg',
  }
};

const layouts = [
  // Tower A
  { id: 1, tower: 'Tower A', floor: 'Floor 1', area: '120 sqm', type: '2BHK', rooms: 2, img: 'https://images.unsplash.com/photo-1502673530728-f79b4cab31b1?auto=format&fit=crop&w=200&q=60' },
  { id: 2, tower: 'Tower A', floor: 'Floor 1', area: '140 sqm', type: '3BHK', rooms: 3, img: 'https://www.apartmentguide.com/blog/wp-content/uploads/2021/04/3-bedroom-2-bath-1.png' },
  { id: 3, tower: 'Tower A', floor: 'Floor 1', area: '150 sqm', type: '3BHK', rooms: 3, img: 'https://images.unsplash.com/photo-1502673530728-f79b4cab31b1?auto=format&fit=crop&w=200&q=60' },
  { id: 4, tower: 'Tower A', floor: 'Floor 2', area: '130 sqm', type: '2BHK', rooms: 2, img: 'https://www.apartmentguide.com/blog/wp-content/uploads/2021/04/2-bedroom-1-bath-1.png' },
  { id: 5, tower: 'Tower A', floor: 'Floor 2', area: '150 sqm', type: '3BHK', rooms: 3, img: 'https://www.apartmentguide.com/blog/wp-content/uploads/2021/04/3-bedroom-2-bath-1.png' },
  { id: 6, tower: 'Tower A', floor: 'Floor 2', area: '170 sqm', type: '3BHK', rooms: 3, img: 'https://images.unsplash.com/photo-1502673530728-f79b4cab31b1?auto=format&fit=crop&w=200&q=60' },
  { id: 7, tower: 'Tower A', floor: 'Floor 3', area: '110 sqm', type: '1BHK', rooms: 1, img: 'https://www.apartmentguide.com/blog/wp-content/uploads/2021/04/1-bedroom-1-bath-1.png' },
  { id: 8, tower: 'Tower A', floor: 'Floor 3', area: '100 sqm', type: '1BHK', rooms: 1, img: 'https://www.apartmentguide.com/blog/wp-content/uploads/2021/04/1-bedroom-1-bath-1.png' },
  { id: 9, tower: 'Tower A', floor: 'Floor 3', area: '120 sqm', type: '2BHK', rooms: 2, img: 'https://images.unsplash.com/photo-1502673530728-f79b4cab31b1?auto=format&fit=crop&w=200&q=60' },

  // Tower B
  { id: 7, tower: 'Tower B', floor: 'Floor 1', area: '130 sqm', type: '2BHK', rooms: 2, img: 'https://www.apartmentguide.com/blog/wp-content/uploads/2021/04/2-bedroom-1-bath-1.png' },
  { id: 8, tower: 'Tower B', floor: 'Floor 1', area: '150 sqm', type: '3BHK', rooms: 3, img: 'https://www.apartmentguide.com/blog/wp-content/uploads/2021/04/3-bedroom-2-bath-1.png' },
  { id: 9, tower: 'Tower B', floor: 'Floor 1', area: '160 sqm', type: '3BHK', rooms: 3, img: 'https://images.unsplash.com/photo-1502673530728-f79b4cab31b1?auto=format&fit=crop&w=200&q=60' },
  { id: 10, tower: 'Tower B', floor: 'Floor 2', area: '170 sqm', type: '3BHK', rooms: 3, img: 'https://images.unsplash.com/photo-1502673530728-f79b4cab31b1?auto=format&fit=crop&w=200&q=60' },
  { id: 11, tower: 'Tower B', floor: 'Floor 2', area: '190 sqm', type: '4BHK', rooms: 4, img: 'https://www.apartmentguide.com/blog/wp-content/uploads/2021/04/4-bedroom-3-bath-1.png' },
  { id: 12, tower: 'Tower B', floor: 'Floor 2', area: '200 sqm', type: '5BHK', rooms: 5, img: 'https://images.unsplash.com/photo-1600585154356-596af9009e0b?auto=format&fit=crop&w=200&q=60' },
  { id: 13, tower: 'Tower B', floor: 'Floor 3', area: '90 sqm', type: '1BHK', rooms: 1, img: 'https://www.apartmentguide.com/blog/wp-content/uploads/2021/04/1-bedroom-1-bath-1.png' },
  { id: 14, tower: 'Tower B', floor: 'Floor 3', area: '110 sqm', type: '2BHK', rooms: 2, img: 'https://images.unsplash.com/photo-1502673530728-f79b4cab31b1?auto=format&fit=crop&w=200&q=60' },
  { id: 15, tower: 'Tower B', floor: 'Floor 3', area: '120 sqm', type: '2BHK', rooms: 2, img: 'https://www.apartmentguide.com/blog/wp-content/uploads/2021/04/2-bedroom-1-bath-1.png' },
  

  // Tower C
  { id: 14, tower: 'Tower C', floor: 'Floor 1', area: '140 sqm', type: '2BHK', rooms: 2, img: 'https://images.unsplash.com/photo-1502673530728-f79b4cab31b1?auto=format&fit=crop&w=200&q=60' },
  { id: 15, tower: 'Tower C', floor: 'Floor 1', area: '160 sqm', type: '3BHK', rooms: 3, img: 'https://www.apartmentguide.com/blog/wp-content/uploads/2021/04/3-bedroom-2-bath-1.png' },
  { id: 16, tower: 'Tower C', floor: 'Floor 1', area: '150 sqm', type: '3BHK', rooms: 3, img: 'https://images.unsplash.com/photo-1502673530728-f79b4cab31b1?auto=format&fit=crop&w=200&q=60' },
  { id: 17, tower: 'Tower C', floor: 'Floor 2', area: '180 sqm', type: '4BHK', rooms: 4, img: 'https://www.apartmentguide.com/blog/wp-content/uploads/2021/04/4-bedroom-3-bath-1.png' },
  { id: 18, tower: 'Tower C', floor: 'Floor 2', area: '200 sqm', type: '5BHK', rooms: 5, img: 'https://images.unsplash.com/photo-1600585154356-596af9009e0b?auto=format&fit=crop&w=200&q=60' },
  { id: 19, tower: 'Tower C', floor: 'Floor 2', area: '220 sqm', type: '5BHK', rooms: 5, img: 'https://images.unsplash.com/photo-1600585154356-596af9009e0b?auto=format&fit=crop&w=200&q=60' },
  { id: 21, tower: 'Tower C', floor: 'Floor 3', area: '100 sqm', type: '1BHK', rooms: 1, img: 'https://www.apartmentguide.com/blog/wp-content/uploads/2021/04/1-bedroom-1-bath-1.png' },
  { id: 22, tower: 'Tower C', floor: 'Floor 3', area: '120 sqm', type: '2BHK', rooms: 2, img: 'https://www.apartmentguide.com/blog/wp-content/uploads/2021/04/2-bedroom-1-bath-1.png' },
  { id: 23, tower: 'Tower C', floor: 'Floor 3', area: '140 sqm', type: '3BHK', rooms: 3, img: 'https://images.unsplash.com/photo-1502673530728-f79b4cab31b1?auto=format&fit=crop&w=200&q=60' },
];


const TowerSelector: React.FC<{ onSelect: (tower: string) => void }> = ({ onSelect }) => (
  <div className={styles.grid3}>
    {towers.map(tower => (
      <Card key={tower} onClick={() => onSelect(tower)} className={styles.card}>
        <img src={towerImages[tower]} alt={tower} />
        <CardHeader className={styles.cardHeader}>
          <CardPreview className={styles.cardPreview}>
            <img src={towerImages[tower]} alt={tower} />
          </CardPreview>
          <div className={styles.cardTitle}>{tower}</div>
        </CardHeader>
        <div className={styles.cardDescription}>Click to select {tower}</div>
      </Card>
    ))}
  </div>
);

const FloorSelector: React.FC<{ tower: string; onSelect: (floor: string) => void; onBack: () => void }> = ({ tower, onSelect, onBack }) => (
  <div className={styles.container}>
    <Button appearance="outline" onClick={onBack} className={styles.backButton}>Back to Towers</Button>
    <h2 className={styles.heading}>Select a Floor in {tower}</h2>
    <div className={styles.grid5}>
      {floors.map(floor => (
        <Card key={floor} onClick={() => onSelect(floor)} className={styles.floorCard}>
          {/* <img src="https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=200&q=60" alt={floor} /> */}
          {/* <img src={floorsImages[floor]} alt={floor} className={styles.floorImage} /> */}
          <img src={floorsImages[tower][floor]} alt={floor} className={styles.img} />
          <CardHeader className={styles.cardHeader}>
            <div className={styles.cardTitle}>{floor}</div>
          </CardHeader>
          <div className={styles.cardTitle}>{floor}</div>
        </Card>
      ))}
    </div>
  </div>
);

const LayoutSelector: React.FC<{
  tower: string;
  floor: string;
  onSelect: (layout: typeof layouts[0]) => void;
  onBack: () => void;
}> = ({ tower, floor, onSelect, onBack }) => {
  const filteredLayouts = layouts.filter(
    layout => layout.tower === tower && layout.floor === floor
  );

  return (
    <div className={styles.container}>
      <Button appearance="outline" onClick={onBack} className={styles.backButton}>Back to Floors</Button>
      <h2 className={styles.heading}>Available Layouts on {tower} - {floor}</h2>
      <div className={styles.grid3}>
        {filteredLayouts.length > 0 ? filteredLayouts.map(layout => (
          <motion.div
            key={layout.id}
            whileHover={{ scale: 1.05 }}
            className={styles.layoutCard}
            onClick={() => onSelect(layout)}
          >
            <Card>
              <img src={layout.img} alt="Layout Thumbnail" className={styles.thumbnail} />
              <CardHeader className={styles.cardHeader}>
                <CardPreview className={styles.cardPreview}>
                  <img src={layout.img} alt="Layout Thumbnail" className={styles.thumbnail} />
                </CardPreview>
                <div className={styles.cardTitle}>{layout.type}</div>
              </CardHeader>
              <div className={styles.cardDescription}>
                <p><strong>Area:</strong> {layout.area}</p>
                <p><strong>Rooms:</strong> {layout.rooms}</p>
              </div>
            </Card>
          </motion.div>
        )) : <p>No layouts available for this floor.</p>}
      </div>
    </div>
  );
};



const LayoutDetail: React.FC<{ layout: typeof layouts[0]; onBack: () => void }> = ({ layout, onBack }) => (
  <div className={styles.container}>
    <Button appearance="outline" onClick={onBack} className={styles.backButton}>Back to Layouts</Button>
    <h2 className={styles.heading}>Layout Details</h2>
    <div className={styles.detailGrid}>
      <img src={layout.img} alt="Large Layout" className={styles.largeImage} />
      <div className={styles.detailText}>
        <p><strong>Area:</strong> {layout.area}</p>
        <p><strong>Type:</strong> {layout.type}</p>
        <p><strong>Rooms:</strong> {layout.rooms}</p>
      </div>
    </div>
  </div>
);

const App: React.FC = () => {
  const [selectedTower, setSelectedTower] = useState<string | null>(null);
  const [selectedFloor, setSelectedFloor] = useState<string | null>(null);
  const [selectedLayout, setSelectedLayout] = useState<typeof layouts[0] | null>(null);
  const { toggleTheme } = useTheme();

//   if (selectedLayout) return <LayoutDetail layout={selectedLayout} onBack={() => setSelectedLayout(null)} />;
//   // if (selectedFloor) return <LayoutSelector tower={selectedTower} floor={selectedFloor} onSelect={setSelectedLayout} onBack={() => setSelectedFloor(null)} />;
//   if (selectedFloor && selectedTower) {
//   return (
//     <LayoutSelector
//       tower={selectedTower}
//       floor={selectedFloor}
//       onSelect={setSelectedLayout}
//       onBack={() => setSelectedFloor(null)}
//     />
//   );
// }
//   if (selectedTower) return <FloorSelector tower={selectedTower} onSelect={setSelectedFloor} onBack={() => setSelectedTower(null)} />;

//   return <TowerSelector onSelect={setSelectedTower} />;
// };
return (
    <>
      <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '1rem' }}>
        <Button onClick={toggleTheme}>Toggle Theme</Button>
      </div>
      {selectedLayout ? (
        <LayoutDetail layout={selectedLayout} onBack={() => setSelectedLayout(null)} />
      ) : selectedFloor && selectedTower ? (
        <LayoutSelector
          tower={selectedTower}
          floor={selectedFloor}
          onSelect={setSelectedLayout}
          onBack={() => setSelectedFloor(null)}
        />
      ) : selectedTower ? (
        <FloorSelector
          tower={selectedTower}
          onSelect={setSelectedFloor}
          onBack={() => setSelectedTower(null)}
        />
      ) : (
        <TowerSelector onSelect={setSelectedTower} />
      )}
    </>
  );
};
export default App;
