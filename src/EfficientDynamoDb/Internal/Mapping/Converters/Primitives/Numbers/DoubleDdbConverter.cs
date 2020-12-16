using EfficientDynamoDb.DocumentModel.AttributeValues;

namespace EfficientDynamoDb.Internal.Mapping.Converters.Primitives.Numbers
{
    internal sealed class DoubleDdbConverter : DdbConverter<double>
    {
        public override double Read(AttributeValue attributeValue) => attributeValue.AsNumberAttribute().ToDouble();
    }
}