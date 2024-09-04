'use client'

import React, { useState, useEffect } from 'react';
import './WorksPage.css';
import { motion } from 'framer-motion';

const worksData = {
  ADS: [
    { title: 'MANO', role: 'Writer', url: 'https://www.youtube.com/embed/RL76MeaouYo', id: 1 },
    { title: 'Lumos Global', role: 'Writer', url: 'https://www.youtube.com/embed/ZlV3t0wJBkY', id: 2 },
    { title: 'FreshYo', role: 'Writer', url: 'https://www.youtube.com/embed/O8ZmbVuxiqA', id: 3 },
    { title: 'Wimbiz: No More Lip Service', role: 'Producer/Writer', url: 'https://www.youtube.com/embed/kMRCkDkyTNk', id: 4 },
    { title: 'Quickteller: Quick insurance', role: 'Writer', url: 'https://www.youtube.com/embed/3FwRvkgWzUQ', id: 5 },
    { title: 'StarTimes: classic bouquet reloading', role: 'Writer', url: 'https://www.youtube.com/embed/cWIHUf61uuw', id: 6 },
    { title: 'StarTimes: easter promo', role: 'Writer', url: 'https://www.youtube.com/embed/zk9pHRQXvoE', id: 7 },
  ],
  FILM: [
    { title: 'My Name Is Zozo (2024 - Present)', role: 'Head Writer', url: 'https://www.youtube.com/embed/opSYp9bwtrc', id: 7 },
    { title: 'PEPPERSOUP (2022)', role: 'Head Writer', url: '', id: 5 },
    { title: 'Hello Neighbour (2023 - Present)', role: 'Head Writer', url: 'https://www.youtube.com/embed/U91pZL-weaI', id: 6 },
    { title: 'DADDY YO (2022)', role: 'Head Writer', url: '', id: 4 },
    { title: 'FCMB SHEVENTURES (Documentary)', role: 'Writer, Director & Interviewer', url: 'https://www.youtube.com/embed/-fqGTt2QL3w', id: 1 },
    { title: 'Ts & Cs Apply (2021)', role: 'Director, Producer, Actor & Writer', url: 'https://www.youtube.com/embed/_zS-nxF6lKE', id: 2 },
    { title: 'Back From The Future – Series (2022 – Present)', role: 'Writer', url: 'https://www.youtube.com/embed/iOPtbuhBeKU?list=PLS4AIjx7cKuQOU71UjhobaeUJonuUrN6H', id: 3 },
    { title: 'Lamba Estate', role: 'Creator, Writer, Puppeteer & Voices', url: 'https://www.youtube.com/embed/tdo25jepgfw', id: 8 },
  ],
  PRINT: [
    { title: 'Lagos Open' },
    { title: 'Quickteller Paid in full' },
    { title: 'Quickteller e-insurance' },
    { title: 'FCMB Do something epic' }
  ]
};

const getThumbnailUrl = (url) => {
  const videoId = url.split('/embed/')[1]?.split('?')[0];
  return `https://img.youtube.com/vi/${videoId}/0.jpg`;
};

const WorksPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('ADS');
  const [selectedWork, setSelectedWork] = useState(null);

  const openModal = (work) => setSelectedWork(work);
  const closeModal = () => setSelectedWork(null);

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') closeModal();
  };

  useEffect(() => {
    if (selectedWork) {
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.removeEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedWork]);

  const styler = {
    width: '100%',
    display: 'grid',
    placeItems: 'center'
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <WorksNav selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      <motion.div className={selectedCategory === 'ADS' ? "ads" : "works-grid"} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        {selectedCategory === 'ADS' && (
          <h2
            style={styler}
          >TV Commercials</h2>)}
        {worksData[selectedCategory].map((work) => (
          <motion.div
            key={work.id}
            className="work-item"
            onClick={() => openModal(work)}
            whileHover={{ scale: 1.05, opacity: 0.9 }}
            whileTap={{ scale: 0.95, opacity: 0.8 }}
            layout
          >
            <img
              src={`/images/${work.title}.jpg`}
              alt={work.title}
              onError={(e) => {
                e.target.src = getThumbnailUrl(work.url);
              }}
            />
            <div className="work-info">
              <h3>{work.title}</h3>
              <p>{work.role}</p>
            </div>
          </motion.div>
        ))}
        {selectedCategory === 'ADS' && (
          <><h2
            style={styler}
          >Print Media</h2>
            {worksData['PRINT'].map((work) => (
              <motion.div
                key={work.id}
                className="work-item"
                onClick={() => openModal(work)}
                whileHover={{ scale: 1.05, opacity: 0.9 }}
                whileTap={{ scale: 0.95, opacity: 0.8 }}
                layout
              >
                <img
                  src={`/images/${work.title}.jpg`}
                  alt={work.title}
                />
                <div className="work-info">
                  <h3>{work.title}</h3>
                </div>
              </motion.div>
            ))}</>
        )}

      </motion.div>
      {selectedWork && (
        <VideoModal work={selectedWork} closeModal={closeModal} />
      )}
    </motion.div>
  );
};

export default WorksPage;

const WorksNav = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="works-nav"
    >
      <motion.button
        className={selectedCategory === 'ADS' ? 'clicked' : ''}
        onClick={() => setSelectedCategory('ADS')}
        whileHover={{ scale: 1.1, opacity: 0.9 }}
        whileTap={{ scale: 0.9, opacity: 0.8 }}
      >
        Ads
      </motion.button>
      <motion.button
        className={selectedCategory === 'FILM' ? 'clicked' : ''}
        onClick={() => setSelectedCategory('FILM')}
        whileHover={{ scale: 1.1, opacity: 0.9 }}
        whileTap={{ scale: 0.9, opacity: 0.8 }}
      >
        Film
      </motion.button>
    </motion.nav>
  );
};

const VideoModal = ({ work, closeModal }) => {
  return (
    <motion.div
      className="video-modal"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      onClick={closeModal}
    >
      <motion.div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <iframe
          src={work.url ? work.url : `/images/${work.title}.jpg`}
          title={work.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <div className="modal-info">
          <h2>{work.title}</h2>
          <p>Role: {work.role}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};
