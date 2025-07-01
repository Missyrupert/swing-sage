// src/components/CoachRoundtable.jsx - Corrected Placeholder File
import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react'; // Will re-add these later
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'; // Will re-add later

// Mock coach data (for future use with Swiper)
const mockCoaches = [
    {
        id: 'c1',
        name: 'Coach Alex',
        specialty: 'Short Game',
        bio: 'Specializing in putting and chipping techniques.',
        photo: 'https://via.placeholder.com/120/00ff66/1a1a1a?text=Alex', // Placeholder image
        quote: "The shortest distance to a lower score is usually around the green."
    },
    {
        id: 'c2',
        name: 'Coach Ben',
        specialty: 'Driver & Power',
        bio: 'Helps golfers unlock their maximum driving distance.',
        photo: 'https://via.placeholder.com/120/00ff66/1a1a1a?text=Ben',
        quote: "Swing fast, not hard. Let the club do the work."
    },
    {
        id: 'c3',
        name: 'Coach Chloe',
        specialty: 'Mental Game',
        bio: 'Focuses on course management and mental toughness.',
        photo: 'https://via.placeholder.com/120/00ff66/1a1a1a?text=Chloe',
        quote: "Your mind is your most important golf club."
    },
    {
        id: 'c4',
        name: 'Coach David',
        specialty: 'Swing Fundamentals',
        bio: 'Builds a solid foundation for consistent ball striking.',
        photo: 'https://via.placeholder.com/120/00ff66/1a1a1a?text=David',
        quote: "Master the basics, and the rest will follow."
    }
];

const CoachRoundtable = () => {
    // State for filtering (for future use)
    const [selectedSpecialty, setSelectedSpecialty] = React.useState('All'); // Example filter

    return (
        <section className="coach-roundtable">
            <h2 className="section-title">Coach Roundtable</h2>

            <div className="filter-controls card">
                <label htmlFor="specialty-filter">Filter by Specialty:</label>
                <select
                    id="specialty-filter"
                    className="select-dropdown"
                    value={selectedSpecialty}
                    onChange={(e) => setSelectedSpecialty(e.target.value)}
                >
                    <option value="All">All Coaches</option>
                    <option value="Short Game">Short Game</option>
                    <option value="Driver & Power">Driver & Power</option>
                    <option value="Mental Game">Mental Game</option>
                    <option value="Swing Fundamentals">Swing Fundamentals</option>
                </select>
            </div>

            <div className="card fade-in" style={{ textAlign: 'center', minHeight: '300px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <h3 style={{color: 'var(--accent-color)'}}>Expert Coach Insights Coming Soon!</h3>
                <p>This section will feature a rotating panel of virtual golf coaches, offering specialized tips and insights into various aspects of the game. You'll be able to filter by expertise (e.g., short game, driving, mental game).</p>
                <p>Imagine a dynamic carousel of advice from the pros, tailored to your needs!</p>
                <p style={{ marginTop: '15px', fontSize: '0.9em', opacity: 0.7 }}>
                    Current number of mock coaches available: {mockCoaches.length}
                </p>
            </div>

            {/*
                // Future integration of Swiper carousel will go here
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    breakpoints={{
                        // when window width is >= 768px
                        768: {
                            slidesPerView: 2,
                        },
                        // when window width is >= 1024px
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    className="mySwiper"
                >
                    {mockCoaches
                        .filter(coach => selectedSpecialty === 'All' || coach.specialty === selectedSpecialty)
                        .map(coach => (
                            <SwiperSlide key={coach.id}>
                                <div className="coach-card card">
                                    <img src={coach.photo} alt={coach.name} className="coach-photo" />
                                    <h3>{coach.name}</h3>
                                    <p className="coach-bio">Specialty: {coach.specialty}</p>
                                    <p className="coach-quote">"{coach.quote}"</p>
                                    <button className="button button-accent" style={{ marginTop: 'auto' }}>View Profile</button>
                                </div>
                            </SwiperSlide>
                        ))}
                </Swiper>
            */}
        </section>
    );
};

export default CoachRoundtable;
