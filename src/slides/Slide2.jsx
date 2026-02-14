import CodeBlock from "../components/codeBlock";
import HighlightBox from "../components/highLightBox";

export default function Slide2() {
  return (
    <div className="overflow-y-auto h-full">
      <h2 className="text-5xl font-black text-emerald-400 mb-6">
        Document Middleware
      </h2>

      <p className="text-xl text-gray-400 mb-6">
        Runs on document instances using <code>this</code>
      </p>

      <CodeBlock>{`userSchema.pre('save', function(next) {
  this.updatedAt = new Date();

  if (this.isModified('password')) {
    this.password = hash(this.password);
  }

  next();
});`}</CodeBlock>

      <HighlightBox>
        <p className="text-lg text-gray-300">
          <strong>this</strong> = actual document instance
        </p>
      </HighlightBox>
    </div>
  );
}
