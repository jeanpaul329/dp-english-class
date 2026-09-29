export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f5f7fb",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <header
        style={{
          padding: "20px 6%",
          background: "#ffffff",
          borderBottom: "1px solid #e5e7eb",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "15px",
        }}
      >
        <div>
          <h1 style={{ margin: 0, fontSize: "26px" }}>
            DP ENGLISH CLASS
          </h1>

          <p style={{ margin: "5px 0 0", color: "#667085" }}>
            Learn English. Practice. Progress. Succeed.
          </p>
        </div>

        <div style={{ display: "flex", gap: "10px" }}>
          <button
            style={{
              padding: "11px 18px",
              borderRadius: "8px",
              border: "1px solid #d0d5dd",
              background: "#ffffff",
              cursor: "pointer",
            }}
          >
            Connexion
          </button>

          <button
            style={{
              padding: "11px 18px",
              borderRadius: "8px",
              border: "none",
              background: "#111827",
              color: "#ffffff",
              cursor: "pointer",
            }}
          >
            S'inscrire
          </button>
        </div>
      </header>

      <section
        style={{
          padding: "90px 6%",
          textAlign: "center",
          background: "#ffffff",
        }}
      >
        <div style={{ fontSize: "58px" }}>🎓</div>

        <h2
          style={{
            fontSize: "clamp(38px, 6vw, 68px)",
            margin: "20px 0",
            color: "#111827",
          }}
        >
          Apprenez l'anglais autrement.
        </h2>

        <p
          style={{
            maxWidth: "700px",
            margin: "0 auto",
            fontSize: "19px",
            lineHeight: "1.7",
            color: "#475467",
          }}
        >
          Une plateforme complète pour apprendre, pratiquer et progresser
          en anglais avec des cours structurés, des enseignants et des
          outils intelligents.
        </p>

        <button
          style={{
            marginTop: "35px",
            padding: "15px 28px",
            borderRadius: "10px",
            border: "none",
            background: "#111827",
            color: "#ffffff",
            fontSize: "17px",
            cursor: "pointer",
          }}
        >
          Commencer maintenant
        </button>
      </section>

      <section
        style={{
          padding: "60px 6%",
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
        }}
      >
        <Feature
          icon="📚"
          title="Cours structurés"
          text="Des parcours organisés du niveau A1 au niveau C2."
        />

        <Feature
          icon="🎧"
          title="Speaking & Listening"
          text="Développez votre compréhension et votre expression orale."
        />

        <Feature
          icon="🤖"
          title="Assistant IA"
          text="Un accompagnement intelligent pour soutenir votre apprentissage."
        />

        <Feature
          icon="🏆"
          title="Progression"
          text="Suivez vos compétences, vos objectifs et vos résultats."
        />
      </section>

      <footer
        style={{
          marginTop: "40px",
          padding: "35px",
          background: "#111827",
          color: "#ffffff",
          textAlign: "center",
        }}
      >
        <strong>DP ENGLISH CLASS</strong>

        <p style={{ opacity: 0.8 }}>
          Learn English. Practice. Progress. Succeed.
        </p>

        
      </footer>
    </main>
  );
}

function Feature({
  icon,
  title,
  text,
}: {
  icon: string;
  title: string;
  text: string;
}) {
  return (
    <div
      style={{
        background: "#ffffff",
        padding: "25px",
        borderRadius: "14px",
        border: "1px solid #e4e7ec",
      }}
    >
      <div style={{ fontSize: "35px" }}>{icon}</div>

      <h3 style={{ color: "#111827" }}>{title}</h3>

      <p style={{ color: "#667085", lineHeight: "1.6" }}>{text}</p>
    </div>
  );
}