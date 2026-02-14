import CodeBlock from "../components/codeBlock";
import HighlightBox from "../components/highLightBox";

export default function Slide3() {
  return (
    <div className="overflow-y-auto h-full">
      <h2 className="text-5xl font-black text-emerald-400 mb-6">
        Query Middleware
      </h2>

      <p className="text-xl text-gray-400 mb-6">
        Runs on query objects like find(), update()
      </p>

      <CodeBlock>{`userSchema.pre('find', function(next) {
  this.where({ isDeleted: false });
  this.populate('author');
  next();
});`}</CodeBlock>

      <HighlightBox>
        <p className="text-lg text-gray-300">
          <strong>this</strong> = query object (NOT document)
        </p>
      </HighlightBox>
    </div>
  );
}
