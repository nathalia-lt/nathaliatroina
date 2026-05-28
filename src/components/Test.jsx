function Test({titulo="Test Component"}) {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">{titulo}</h1>
      <p>This is a test component.</p>
    </div>
  );
}

export default Test;