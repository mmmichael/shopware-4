/**
 * Shopware 4.0
 * Copyright © 2012 shopware AG
 *
 * According to our dual licensing model, this program can be used either
 * under the terms of the GNU Affero General Public License, version 3,
 * or under a proprietary license.
 *
 * The texts of the GNU Affero General Public License with an additional
 * permission and of our proprietary license can be found at and
 * in the LICENSE file you have received along with this program.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * "Shopware" is a registered trademark of shopware AG.
 * The licensing of the program under the AGPLv3 does not imply a
 * trademark license. Therefore any rights, title and interest in
 * our trademarks remain entirely with us.
 *
 * @category   Shopware
 * @package    Blog
 * @subpackage Model
 * @copyright  Copyright (c) 2012, shopware AG (http://www.shopware.de)
 * @version    $Id$
 * @author shopware AG
 */

/**
 * Shopware Model - Detail Form backend module.
 *
 * The Detail model of the blog module represent a data row of the s_blog or the
 * Shopware\Models\Blog\Blog doctrine model, with some additional data for the additional information panel.
 */
//{block name="backend/blog/model/detail"}
Ext.define('Shopware.apps.Blog.model.Detail', {
	/**
	* Extends the standard ExtJS 4
	* @string
	*/
    extend : 'Ext.data.Model',
	/**
	* The fields used for this model
	* @array
	*/
    fields : [
		//{block name="backend/blog/model/detail/fields"}{/block}
        { name : 'id', type : 'int' },
        { name : 'title', type : 'string' },
        { name : 'shortDescription', type : 'string' },
        { name : 'description', type : 'string' },
        { name : 'template', type : 'string' },
        { name : 'active', type : 'boolean' },
        { name : 'authorId', type : 'int', useNull: true },
        { name : 'categoryId', type : 'int', useNull: true  },
        { name : 'tags', type : 'string'},
        { name : 'metaKeyWords', type : 'string' },
        { name : 'metaDescription', type : 'string' },
        { name : 'displayDate' },
        { name : 'displayTime' }
    ],
	/**
	* If the name of the field is 'id' extjs assumes automatically that
	* this field is an unique identifier. 
	*/
    idProperty : 'id',
	/**
	* Configure the data communication
	* @object
	*/
    proxy : {
        type : 'ajax',
        api:{
            read:   '{url action=getDetail}',
            create: '{url action=saveBlogArticle}',
            update: '{url action=saveBlogArticle}'
        },
        reader : {
            type : 'json',
            root : 'data',
            totalProperty: 'totalCount'
        }
    },
    associations: [
        { type: 'hasMany', model: 'Shopware.apps.Blog.model.Media', name: 'getMedia', associationKey: 'media' },
        { type: 'hasMany', model: 'Shopware.apps.Blog.model.AssignedArticles', name: 'getAssignedArticles', associationKey: 'assignedArticles' },
        { type:'hasMany', model:'Shopware.apps.Blog.model.Attribute', name:'getAttribute', associationKey:'attribute' }
    ]

});
//{/block}
