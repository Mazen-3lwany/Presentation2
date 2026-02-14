import Card from "../components/card";
import CodeBlock from "../components/codeBlock";

export default function Slide4() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full items-center">
      <Card>
        <h3 className="text-2xl font-bold text-cyan-400 mb-4">
          Document Middleware
        </h3>

        <CodeBlock>{`const user = new User({...});
await user.save();
// ✓ Runs pre('save')`}</CodeBlock>
      </Card>

      <Card>
        <h3 className="text-2xl font-bold text-cyan-400 mb-4">
          Query Middleware
        </h3>

        <CodeBlock>{`await User.find({...});
await User.findOneAndUpdate({...});
// ✓ Runs pre('find')`}</CodeBlock>
      </Card>
    </div>
  );
}
