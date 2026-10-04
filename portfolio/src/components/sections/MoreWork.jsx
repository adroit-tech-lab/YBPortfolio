import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import SectionText from '../utilities/SectionText';

import branding1 from '../../assets/work/branding1.jpeg';
import branding2 from '../../assets/work/branding2.jpeg';
import branding3 from '../../assets/work/branding3.jpeg';
import branding4 from '../../assets/work/branding4.jpeg';

import logo1 from '../../assets/work/logo1.jpeg';
import logo2 from '../../assets/work/logo2.jpeg';
import logo3 from '../../assets/work/logo3.jpeg';
import logo4 from '../../assets/work/logo4.jpeg';

import marketing1 from '../../assets/work/marketing1.jpg';
import marketing2 from '../../assets/work/marketing2.jpg';
import marketing3 from '../../assets/work/marketing3.jpg';
import marketing4 from '../../assets/work/marketing4.jpg';

import flyer1 from '../../assets/work/flyer1.jpeg';
import flyer2 from '../../assets/work/flyer2.jpeg';
import flyer3 from '../../assets/work/flyer3.jpeg';
import flyer4 from '../../assets/work/flyer4.jpeg';

import social1 from '../../assets/work/social1.jpg';
import social2 from '../../assets/work/social2.jpg';
import social3 from '../../assets/work/social3.jpeg';
import social4 from '../../assets/work/social4.png';

import packaging1 from '../../assets/work/packaging1.jpg';
import packaging2 from '../../assets/work/packaging2.jpg';
import packaging3 from '../../assets/work/packaging3.jpg';
import packaging4 from '../../assets/work/packaging4.jpg';

import event1 from '../../assets/work/event1.jpg';
import event2 from '../../assets/work/event2.jpg';
import event3 from '../../assets/work/event3.jpg';
import event4 from '../../assets/work/event4.jpg';

import ebook1 from '../../assets/work/ebook1.jpg';
import ebook2 from '../../assets/work/ebook2.jpg';
import ebook3 from '../../assets/work/ebook3.jpg';
import ebook4 from '../../assets/work/ebook4.jpg';

import poster1 from '../../assets/work/poster1.jpeg';
import poster2 from '../../assets/work/poster2.jpeg';
import poster3 from '../../assets/work/poster3.jpeg';
import poster4 from '../../assets/work/poster4.jpg';

const categories = [
  {
    id: 'branding',
    title: 'Brand Identity',
    images: [branding1, branding2, branding3, branding4],
  },
  {
    id: 'logo',
    title: 'Logo Design',
    images: [logo1, logo2, logo3, logo4],
  },
  {
    id: 'marketing',
    title: 'Marketing Design',
    images: [marketing1, marketing2, marketing3, marketing4],
  },
  {
    id: 'flyer',
    title: 'Flyer Design',
    images: [flyer1, flyer2, flyer3, flyer4],
  },
  {
    id: 'poster',
    title: 'Poster Design',
    images: [poster1, poster2, poster3, poster4],
  },
  {
    id: 'social',
    title: 'Social Media Design',
    images: [social1, social2, social3, social4],
  },
  {
    id: 'packaging',
    title: 'Packaging Design',
    images: [packaging1, packaging2, packaging3, packaging4],
  },
  {
    id: 'event',
    title: 'Event Design',
    images: [event1, event2, event3, event4],
  },
  {
    id: 'ebook',
    title: 'Ebook Design',
    images: [ebook1, ebook2, ebook3, ebook4],
  }
];

const MoreWork = () => {
  const [activeCategoryId, setActiveCategoryId] = useState('branding');

  const activeCategory = categories.find(
    (category) => category.id === activeCategoryId
  );

  return (
    <section
      id="moreWork"
      className="relative isolate scroll-mt-28 overflow-hidden bg-black px-6 py-16 font-inter sm:px-8 sm:py-20 md:px-10 lg:px-8 lg:py-28"
    >
      {/* Black gradient */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-br from-black via-black/90 to-zinc-950" />

      {/* Yellow glow */}
      <div className="pointer-events-none absolute -left-40 top-20 -z-10 h-80 w-80 rounded-full bg-yellow-400/10 blur-[100px] sm:h-112.5 sm:w-112.5" />

      {/* Blue glow */}
      <div className="pointer-events-none absolute -right-40 bottom-0 -z-10 h-96 w-96 rounded-full bg-blue-500/20 blur-[120px] sm:h-137.5 sm:w-137.5" />

      {/* Subtle colour overlay */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-tr from-yellow-400/5 via-transparent to-blue-500/10" />

      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-10 sm:mb-12 lg:mb-16">
          <SectionText
            smallTitle="EXPLORE MORE WORK"
            title="A closer look by discipline"
            description="The practice spans identity, packaging, print, digital and editorial work — organized here by category."
            smallTitleColor="text-blue-400"
            titleColor="text-white"
            descriptionColor="text-zinc-400"
            align="left"
          />
        </div>

        <div className="grid grid-cols-1 items-start gap-8 sm:gap-10 md:grid-cols-[220px_minmax(0,1fr)] md:gap-8 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-12">
          {/* Category navigation */}
          <nav aria-label="Work categories" className="min-w-0">
            <div className="flex flex-wrap gap-2 md:flex-col md:gap-3">
              {categories.map((category) => {
                const isActive = activeCategoryId === category.id;

                return (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => setActiveCategoryId(category.id)}
                    aria-pressed={isActive}
                    aria-controls="more-work-gallery"
                    className={`group flex items-center justify-between gap-3 rounded-full border px-4 py-3 text-left text-sm font-medium transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black md:w-full md:rounded-2xl md:px-5 md:py-4 lg:text-base ${
                      isActive
                        ? 'border-yellow-400 bg-yellow-400 text-black'
                        : 'border-white/10 bg-white/5 text-zinc-300 backdrop-blur-xl hover:border-white/20 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    <span>{category.title}</span>

                    <ArrowUpRight
                      size={18}
                      aria-hidden="true"
                      className={`hidden shrink-0 transition-transform duration-300 motion-reduce:transition-none md:block ${
                        isActive
                          ? 'translate-x-0.5 -translate-y-0.5'
                          : 'group-hover:translate-x-0.5 group-hover:-translate-y-0.5'
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </nav>

          {/* Selected category gallery */}
          <div
            id="more-work-gallery"
            role="region"
            aria-label={`${activeCategory.title} gallery`}
            className="min-w-0"
          >
            <div className="mb-5 flex items-center justify-between gap-4">
              <h3 className="text-lg font-semibold text-white sm:text-xl">
                {activeCategory.title}
              </h3>

              <span className="shrink-0 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-400">
                {activeCategory.images.length} designs
              </span>
            </div>

            <p role="status" className="sr-only">
              Showing {activeCategory.images.length} designs in{' '}
              {activeCategory.title}.
            </p>

            <div className="grid grid-cols-1 gap-4 min-[400px]:grid-cols-2 sm:gap-5 lg:gap-6">
              {activeCategory.images.map((image, index) => (
                <div
                  key={`${activeCategory.id}-${index}`}
                  className="group relative aspect-square overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 shadow-lg sm:rounded-3xl"
                >
                  <img
                    src={image}
                    alt={`${activeCategory.title} portfolio sample ${index + 1}`}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transition-none"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoreWork;