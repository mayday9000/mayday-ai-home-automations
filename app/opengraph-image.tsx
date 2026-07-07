import { ImageResponse } from "next/og";

export const alt = "Mayday AI: Never Miss Another Call";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#D9531E",
          padding: 72,
          color: "#FFFBF3",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 14,
              backgroundColor: "#FFFBF3",
              color: "#D9531E",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 44,
              fontWeight: 700,
            }}
          >
            M
          </div>
          <div style={{ fontSize: 40, fontWeight: 700 }}>Mayday AI</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 88, fontWeight: 700, lineHeight: 1.05 }}>
            Never miss another call.
          </div>
          <div style={{ fontSize: 34, opacity: 0.9 }}>
            An AI receptionist that answers 24/7, books the appointment, and captures every lead.
          </div>
        </div>

        <div style={{ fontSize: 28, opacity: 0.85 }}>maydayautomation.com</div>
      </div>
    ),
    size,
  );
}
