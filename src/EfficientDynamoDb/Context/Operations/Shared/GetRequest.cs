using System.Collections.Generic;
using EfficientDynamoDb.DocumentModel;

namespace EfficientDynamoDb.Context.Operations.Shared
{
    public class GetRequest : TableRequest
    {
        /// <summary>
        /// A map of attribute names to AttributeValue objects, representing the primary key of the item to retrieve. <br/><br/>
        /// For the primary key, you must provide all of the attributes. For example, with a simple primary key, you only need to provide a value for the partition key. For a composite primary key, you must provide values for both the partition key and the sort key.
        /// </summary>
        public PrimaryKey? Key { get; set; }
        
        /// <summary>
        /// One or more substitution tokens for attribute names in an expression. The following are some use cases for using ExpressionAttributeNames:
        /// <list type="bullet">
        /// <listheader>
        /// <description> Valid comparisons for the sort key condition are as follows:</description>
        /// </listheader>
        /// <item>
        /// <term>To access an attribute whose name conflicts with a DynamoDB reserved word.</term>
        /// </item>
        /// <item>
        /// <term>To create a placeholder for repeating occurrences of an attribute name in an expression.</term>
        /// </item>
        /// <item>
        /// <term>To prevent special characters in an attribute name from being misinterpreted in an expression.</term>
        /// </item>
        /// </list>
        /// Use the <c>#</c> character in a <see cref="ProjectionExpression"/> to dereference an attribute name.<br/>
        /// <example> If your <see cref="ProjectionExpression"/> is equal to <c>#pk = :pk</c>, then map <c>#pk</c> to the real attribute name in the <see cref="ExpressionAttributeNames"/> dictionary
        /// <code>AttributeNames = new Dictionary&lt;string, string>
        /// {
        ///     ["#pk"] = "pk"
        /// }
        /// </code>
        /// </example>
        /// </summary>
        public IReadOnlyDictionary<string, string>? ExpressionAttributeNames { get; set; }

        /// <summary>
        /// A collection of strings that identifies one or more attributes to retrieve from the table. These attributes can include scalars, sets, or elements of a JSON document. <br/><br/>
        /// If no attribute names are specified, then all attributes will be returned. If any of the requested attributes are not found, they will not appear in the result. 
        /// </summary>
        public IReadOnlyList<string>? ProjectionExpression { get; set; }
    }
}