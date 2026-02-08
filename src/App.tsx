import React from 'react';
import { Title } from './components/Title';
import { TeaserSection } from './components/TeaserSection';
import { PipelineImage } from './components/PipelineImage';
import { VideoGrid } from './components/VideoGrid';
import { Dialog } from './components/Dialog';
import { ComparisonDialog } from './components/ComparisonDialog';
import { ComparisonSection } from './components/ComparisonSection';
import { AbstractSection } from './components/sections/AbstractSection';
import { MotivationSection } from './components/sections/MotivationSection';
import { MethodologySection } from './components/sections/MethodologySection';
import { GradientConflictSection } from './components/sections/GradientConflictSection';
import { QuantitativeComparisonSection } from './components/sections/QuantitativeComparisonSection';
import { Footer } from './components/Footer';
import { videoData, teaserData } from './data/videoData';
import { comparisonData } from './data/comparisonData';

function App() {
  const [selectedVideo, setSelectedVideo] = React.useState<(typeof videoData[0] | typeof teaserVideo) | null>(null);
  const [selectedComparison, setSelectedComparison] = React.useState<typeof comparisonData[0] | null>(null);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
        <Title />
        
        <TeaserSection {...teaserData} />
        
        {/* <PipelineImage 
          imageUrl="/images/ICCV_MAIN.png"
          altText="DecompDreamer Pipeline Overview"
        /> */}

        <AbstractSection />
        {/* <MotivationSection /> */}
        {/* <MethodologySection /> */}
        <MethodologySection 
          imageUrl="/images/website_main_figure.png"
          altText="DecompDreamer Pipeline Overview"
        />

        <GradientConflictSection 
          imageUrl="/images/plots.png"
          altText="Gradient Conflict Quantification"
        />

        <QuantitativeComparisonSection 
          imageUrl="/images/quant_comp.png"
          altText="Quantitative Comparison Table"
        />

        <ComparisonSection 
          // onComparisonSelect={setSelectedComparison} 
        />

        {/* <VideoGrid 
          videos={videoData} 
          onVideoSelect={setSelectedVideo} 
        /> */}
      </div>

      <Footer />

      {selectedVideo && (
        <Dialog
          isOpen={!!selectedVideo}
          onClose={() => setSelectedVideo(null)}
          title={selectedVideo.title}
          description={selectedVideo.description || ''}
          subVideos={selectedVideo.subVideos}
        />
      )}

      {selectedComparison && (
        <ComparisonDialog
          isOpen={!!selectedComparison}
          onClose={() => setSelectedComparison(null)}
          title={selectedComparison.title}
          // description={selectedComparison.description}
          subVideos={selectedComparison.subVideos}
        />
      )}
    </div>
  );
}

export default App;