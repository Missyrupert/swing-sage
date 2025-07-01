// src/components/CourseStrategyMentalGame.jsx - COMPLETE FILE

import React from 'react';

const CourseStrategyMentalGame = () => {
    return (
        <section className="course-mental-section">
            <h2 className="section-title">Mastering the Game: Strategy & Mindset</h2>

            <div className="course-strategy-card card fade-in">
                <h3 style={{color: 'var(--accent-color)', marginBottom: '15px'}}>⛳ Course Strategy: Play Smarter, Not Harder</h3>
                <p>Developing a solid course strategy is as important as perfecting your swing. It's about thinking your way around the course and minimizing mistakes.</p>
                <ul>
                    <li>
                        <strong>Know Your Distances (Realistically):</strong> Be honest about how far you *actually* hit each club, not how far you *wish* you hit it. Use a rangefinder or GPS.
                    </li>
                    <li>
                        <strong>Target Selection (Play to the Fat Part):</strong> Don't always aim directly at the flag, especially if it's tucked close to a hazard. Aim for the center of the green for a larger margin of error.
                    </li>
                    <li>
                        <strong>Assess Risk vs. Reward:</strong> Before attempting a heroic shot, consider the worst-case scenario. Is the potential reward worth the risk of a penalty or lost ball? Play conservatively when needed.
                    </li>
                    <li>
                        <strong>Understand the Course Layout:</strong> Study the hole, know where the hazards are, and identify the best angles for your approach shots. Sometimes hitting less than driver is the smartest play.
                    </li>
                    <li>
                        <strong>Managing Trouble:</strong> When in a bad lie or deep rough, prioritize getting the ball back into play with minimal damage. Don't compound errors by attempting impossible shots.
                    </li>
                </ul>
                <p className="read-more note-text" style={{marginTop: '20px'}}>
                    *More in-depth strategic scenarios and interactive planners coming soon!
                </p>
            </div>

            <div className="mental-game-card card fade-in">
                <h3 style={{color: 'var(--accent-color)', marginBottom: '15px'}}>🧠 Mental Game: Your Most Important Club</h3>
                <p>Your mindset can be your greatest asset or your biggest enemy on the golf course. Cultivate a strong mental game to unlock your full potential.</p>
                <ul>
                    <li>
                        <strong>Develop a Consistent Pre-Shot Routine:</strong> This helps quiet your mind, focuses you on the task at hand, and prepares you physically and mentally for the swing.
                    </li>
                    <li>
                        <strong>Stay Present, One Shot at a Time:</strong> Avoid dwelling on past mistakes or worrying about future shots. Focus 100% on the shot you are about to hit.
                    </li>
                    <li>
                        <strong>Accept Bad Shots & Move On:</strong> Even pros hit bad shots. The key is how quickly you forget them and refocus. Don't let one bad shot ruin your round.
                    </li>
                    <li>
                        <strong>Positive Self-Talk & Visualization:</strong> Be your own best caddie. Encourage yourself and visualize successful shots before you execute them. See the ball flying exactly where you want it to go.
                    </li>
                    <li>
                        <strong>Manage Expectations:</strong> Not every shot will be perfect. Play with the goal of enjoying the game and improving, not necessarily shooting your lowest score every time.
                    </li>
                </ul>
                <p className="read-more note-text" style={{marginTop: '20px'}}>
                    *Explore guided meditations and mental exercises designed specifically for golfers coming soon!
                </p>
            </div>
        </section>
    );
};

export default CourseStrategyMentalGame;