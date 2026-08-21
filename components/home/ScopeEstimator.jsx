"use client";

import { useMemo, useState } from "react";

function tierFor(team, mode) {
  const scale = mode === "full" ? team + 2 : team;
  if (scale <= 3) return { tier: "Solo Sprint", sub: "1–3 specialists" };
  if (scale <= 8) return { tier: "Core Team", sub: "3–8 specialists" };
  return { tier: "Full Squad", sub: "9+ specialists" };
}

export default function ScopeEstimator() {
  const [team, setTeam] = useState(4);
  const [weeks, setWeeks] = useState(8);
  const [mode, setMode] = useState("lean"); // "lean" | "full"

  const { tier, sub } = useMemo(() => tierFor(team, mode), [team, mode]);

  return (
    <div>
      <div className="c-tog" role="group" aria-label="Engagement style">
        <button aria-pressed={mode === "lean"} onClick={() => setMode("lean")}>
          Lean &amp; Fast
        </button>
        <button aria-pressed={mode === "full"} onClick={() => setMode("full")}>
          Full Build
        </button>
      </div>

      <div className="c-out">
        <b>{tier}</b>
        <i>{sub}</i>
      </div>

      <div className="c-sl">
        <div className="c-sl__r">
          <label htmlFor="teamR">Team size</label>
          <output htmlFor="teamR">
            {team} {team === 1 ? "person" : "people"}
          </output>
        </div>
        <input
          id="teamR"
          type="range"
          min={1}
          max={20}
          step={1}
          value={team}
          onChange={(e) => setTeam(Number(e.target.value))}
        />
      </div>

      <div className="c-sl">
        <div className="c-sl__r">
          <label htmlFor="weekR">Rough timeline</label>
          <output htmlFor="weekR">{weeks} weeks</output>
        </div>
        <input
          id="weekR"
          type="range"
          min={2}
          max={40}
          step={1}
          value={weeks}
          onChange={(e) => setWeeks(Number(e.target.value))}
        />
      </div>

      <p className="c-note">
        Excludes discovery and QA phases — actual scope depends on integrations, content volume,
        and platform requirements confirmed during onboarding.
      </p>
    </div>
  );
}
