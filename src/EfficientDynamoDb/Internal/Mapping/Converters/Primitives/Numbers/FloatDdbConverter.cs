using EfficientDynamoDb.DocumentModel.AttributeValues;

namespace EfficientDynamoDb.Internal.Mapping.Converters.Primitives.Numbers
{
    internal sealed class FloatDdbConverter : DdbConverter<float>
    {
        public override float Read(in AttributeValue attributeValue) => attributeValue.AsNumberAttribute().ToFloat();
    }
}