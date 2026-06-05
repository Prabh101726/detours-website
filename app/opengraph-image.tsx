import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Detours — Fleet Management for Growing Ontario Fleets";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "radial-gradient(ellipse 70% 60% at 88% 8%, rgba(255,168,72,0.32) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 8% 96%, rgba(255,106,0,0.16) 0%, transparent 65%), #fcfbf9",
          color: "#16161a",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            fontSize: 28,
            letterSpacing: 6,
            color: "#ff6a00",
            fontWeight: 700,
          }}
        >
          DETOURS
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "8px 18px",
              border: "1px solid rgba(34,197,94,0.4)",
              background: "rgba(34,197,94,0.10)",
              color: "#15803d",
              borderRadius: 999,
              fontSize: 22,
              fontWeight: 500,
              alignSelf: "flex-start",
              letterSpacing: 2,
              textTransform: "uppercase",
            }}
          >
            Ontario fleet-ready
          </div>
          <div
            style={{
              fontSize: 96,
              fontWeight: 800,
              lineHeight: 1.02,
              letterSpacing: -2,
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            Run Your Fleet.&nbsp;
            <span style={{ color: "#ff6a00" }}>Not Paperwork.</span>
          </div>
          <div style={{ fontSize: 32, color: "#6f6f78", maxWidth: 960 }}>
            Dispatch, POD, fuel logs, driver payroll, and HST invoices — built
            for growing Ontario fleets.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 20,
            color: "#64748b",
            letterSpacing: 3,
            textTransform: "uppercase",
          }}
        >
          <span>Dispatch • POD • Payroll • HST</span>
          <span>detoursfleet.com</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
