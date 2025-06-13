
import React, { Suspense, lazy } from "react"
import { Button } from "@fluentui/react-components"

import LoadingSpinner from "../components/ui/LoadingSpinner"
import { useTheme } from "../Context/ThemeContext"
import type { Layout } from "../data/propertyData"

import styles from "../styles/App.module.css"

// Lazy load components
const TowerSelector = lazy(() => import("../components/TowerSelector"))
const FloorSelector = lazy(() => import("../components/FloorSelector"))
const LayoutSelector = lazy(() => import("../components/LayoutSelector"))
const LayoutDetail = lazy(() => import("../components/LayoutDetail"))

export default function App2() {
  const [selectedTower, setSelectedTower] = React.useState<string | null>(null)
    const [selectedFloor, setSelectedFloor] = React.useState<string | null>(null)
    // Use any type for selectedLayout to allow flexibility in the layout object
  const [selectedLayout, setSelectedLayout] = React.useState<Layout | null>(null)
  const { toggleTheme } = useTheme()
  

  return (
    <>
      <div className={styles.themeToggle}>
        <Button onClick={toggleTheme}>Toggle Theme</Button>
      </div>

      {selectedLayout ? (
        <Suspense fallback={<LoadingSpinner message="Loading layout details..." />}>
          <LayoutDetail layout={selectedLayout} onBack={() => setSelectedLayout(null)} />
        </Suspense>
      ) : selectedFloor && selectedTower ? (
        <Suspense fallback={<LoadingSpinner message="Loading layouts..." />}>
          <LayoutSelector
            tower={selectedTower}
            floor={selectedFloor}
            onSelect={setSelectedLayout}
            onBack={() => setSelectedFloor(null)}
          />
        </Suspense>
      ) : selectedTower ? (
        <Suspense fallback={<LoadingSpinner message="Loading floors..." />}>
          <FloorSelector
            tower={selectedTower}
            onSelect={setSelectedFloor}
            onBack={() => setSelectedTower(null)}
          />
        </Suspense>
      ) : (
        <Suspense fallback={<LoadingSpinner message="Loading towers..." />}>
          <TowerSelector onSelect={setSelectedTower} />
        </Suspense>
      )}
    </>
  )
}
