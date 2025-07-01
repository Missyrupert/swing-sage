// src/components/RulesMythbusting.jsx - COMPLETE FILE

import React, { useState } from 'react';

const mythsData = [
    {
        id: 'm1',
        myth: "You MUST take a penalty drop if your ball is unplayable in a bunker.",
        fact: "You have options! You can drop in the bunker (with penalty), drop outside the bunker on a line from the hole through where the ball lies (with penalty), or re-play from your previous spot (with penalty).",
        explanation: "Rule 19.3 outlines three relief options for an unplayable ball, two of which allow you to stay in the bunker and one allows you to go outside. All come with a one-stroke penalty, unless dropping outside the bunker which carries a two-stroke penalty for that specific relief option."
    },
    {
        id: 'm2',
        myth: "If your ball hits a tree, it's always an unlucky break and you just play it where it lies.",
        fact: "While often unlucky, sometimes a tree can knock your ball into a *better* position or even back onto the fairway. It's not *always* bad luck.",
        explanation: "The rules simply state you play the ball where it lies. It's a fundamental principle of golf that the course plays as it is found, including trees. Sometimes, the bounce can be fortuitous! Embrace the randomness."
    },
    {
        id: 'm3',
        myth: "You can't move loose impediments in a bunker.",
        fact: "You CAN move loose impediments (like leaves, twigs, stones) anywhere on the course, including bunkers and penalty areas, provided you don't cause your ball to move.",
        explanation: "Rule 15.1 clarifies that loose impediments may be removed without penalty from anywhere on or off the course. However, take care not to cause your ball to move, which would incur a penalty. Be careful not to test the surface of the bunker either!"
    },
    {
        id: 'm4',
        myth: "You must always declare a ball unplayable before taking relief.",
        fact: "You don't have to declare it! If you proceed under the unplayable ball rule (Rule 19), your actions indicate that you consider your ball unplayable.",
        explanation: "While it's good practice to inform your playing partners, the rules don't require a verbal declaration. The act of taking relief under Rule 19 is sufficient."
    },
    {
        id: 'm5',
        myth: "If your club touches the ground in a hazard (bunker/penalty area), it's always a penalty.",
        fact: "Not always! While you cannot ground your club when addressing the ball or making a practice swing, you CAN touch the ground or water if it's unrelated to preparing for the stroke (e.g., placing your club down while waiting, leaning on it).",
        explanation: "Rule 12.2b (for bunkers) and Rule 17.1b (for penalty areas) define specific prohibitions. You cannot *test* the condition of the hazard or *improve* your lie, but incidental touching, or touching the ground when removing a loose impediment is allowed."
    },
    {
        id: 'm6',
        myth: "You can take relief from an animal hole anywhere on the course.",
        fact: "You can only take free relief from animal holes (or other defined abnormal course conditions) if they are in the *general area* (fairway/rough). In a bunker or penalty area, relief is typically with a penalty.",
        explanation: "Rule 16.1 outlines free relief from abnormal course conditions (including animal holes) in the general area. If your ball is in a bunker or penalty area, relief from these conditions usually incurs a penalty, and specific drop zones/procedures apply."
    }
];

const RulesMythbusting = () => {
    const [expandedMyth, setExpandedMyth] = useState(null);

    const toggleMyth = (id) => {
        setExpandedMyth(expandedMyth === id ? null : id);
    };

    return (
        <section className="rules-mythbusting">
            <h2 className="section-title">Rules & Mythbusting</h2>
            {mythsData.map(item => (
                <div key={item.id} className="myth-fact-card card">
                    <div className="myth-header" onClick={() => toggleMyth(item.id)}>
                        <h4 className="myth-title">
                            <span className="label-myth">MYTH:</span> {item.myth}
                        </h4>
                        <span className={`toggle-icon ${expandedMyth === item.id ? 'expanded' : ''}`}>⮟</span> {/* Chevron icon for expand/collapse */}
                    </div>
                    {expandedMyth === item.id && (
                        <div className="fact-details fade-in">
                            <h4 className="fact-title">
                                <span className="label-fact">FACT:</span> {item.fact}
                            </h4>
                            <p className="explanation">{item.explanation}</p>
                            <p className="rule-reference">*(Refer to USGA/R&A Rules of Golf for full details)*</p>
                        </div>
                    )}
                </div>
            ))}
            <p className="note-text" style={{ marginTop: 'var(--spacing-md)' }}>
                *This section provides general guidance. Always refer to the official Rules of Golf for specific situations.
            </p>
        </section>
    );
};

export default RulesMythbusting;