interface QRCodeSectionProps {
  providerName: string;
}

const QRCodeSection = ({ providerName }: QRCodeSectionProps) => {
  // Generate a consistent pattern based on provider name
  const getPattern = () => {
    const pattern = [];
    for (let i = 0; i < 25; i++) {
      pattern.push(i % 3 === 0 || i % 7 === 0);
    }
    return pattern;
  };

  const pattern = getPattern();

  return (
    <div className="sticky top-24 bg-gray-50 rounded-xl p-6 text-center">
      {/* QR Code Placeholder */}
      <div className="w-40 h-40 bg-white mx-auto mb-4 rounded-lg flex items-center justify-center border border-gray-200">
        <div className="grid grid-cols-5 gap-1">
          {pattern.map((filled, i) => (
            <div
              key={i}
              className={`w-5 h-5 ${filled ? "bg-gray-900" : "bg-white"}`}
            />
          ))}
        </div>
      </div>
      <h3 className="font-semibold text-gray-900 mb-1">Scan to download</h3>
      <p className="text-sm text-gray-500">
        Download dooinngs to book services of
      </p>
      <p className="text-sm font-medium text-gray-900">{providerName}</p>
    </div>
  );
};

export default QRCodeSection;
