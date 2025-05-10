import { Rive } from "@rive-app/webgl";

// Karakter isimleri ve input adları eşleşmeli
const characters = [
  { name: "BigBlue", input: "BigBlue" },
  { name: "Teal", input: "Teal" },
  { name: "LilO", input: "Lilo" },
  { name: "Purple", input: "Purple" },
  { name: "BigO", input: "Bigo" },
  { name: "Blue", input: "Blue" },
  { name: "Yellow", input: "Yellow" },
];

const canvas = document.getElementById("riveCanvas");
const rive = new Rive({
  src: "/rive/happy_meeple.riv",
  canvas,
  autoplay: true,
  stateMachines: ["Meeples"],
  onLoad: () => {
    console.log("Rive loaded");

    const sm = rive.stateMachineInputs("Meeples");

    // Input'ları karakter adına göre eşleştir
    characters.forEach(c => {
      c.inputRef = sm.find(i => i.name === c.input);
    });

    // Fare pozisyonu kontrolü
    canvas.addEventListener("mousemove", (e) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      const artboard = rive.artboard;
      const bounds = artboard.bounds;
      const scaleX = canvas.width / bounds.width;
      const scaleY = canvas.height / bounds.height;

      const canvasX = mouseX / scaleX;
      const canvasY = mouseY / scaleY;

      characters.forEach(c => {
        const obj = artboard.root.find(c.name);
        if (obj) {
          const hit = canvasX >= obj.x &&
                      canvasX <= obj.x + obj.width &&
                      canvasY >= obj.y &&
                      canvasY <= obj.y + obj.height;
          if (c.inputRef) c.inputRef.value = hit;
        }
      });
    });

    // Fare çıktığında tüm input'ları sıfırla
    canvas.addEventListener("mouseleave", () => {
      characters.forEach(c => {
        if (c.inputRef) c.inputRef.value = false;
      });
    });
  }
});
